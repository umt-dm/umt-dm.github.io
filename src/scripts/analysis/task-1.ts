// @ts-nocheck

// 
// Imports
// 

const fs = require('fs');
const path = require('path');


// 
// Paths
// 

let root:string = path.join(process.cwd());
root = fs.existsSync(path.join(root, 'src')) ? path.join(root, 'src') : root;

const submissions_path = path.join(root, 'public/submissions/task-1');
const result_path = path.join(root, 'dist/submissions/task-1.json');
const messages_path = path.join(root, 'dist/analysis/error_message_contents.json');
const error_messages = JSON.parse(fs.readFileSync(messages_path, 'utf-8'));

// 
// Error Generator
// 

const gen_error = (message: string, placeholders: { [key: string]: any }) => {
    return message.replace(/\{(\w+)\}/g, (_, key) => {
        const value = placeholders[key];
        return value !== undefined ? String(value) : `{${key}}`;
    });
};


// 
// Util
// 

const readJSONFile = (filePath: string) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch {
        return null;
    }
};


// 
// Process Team Submission
// 

const process_team = (data: any, fileName: string) => {
    // Check for required fields in the main structure
    if (!data || typeof data !== 'object' || !data.team_name || !data.members || !data.domains) {
        const missingFields = [];
        if (!data.team_name) missingFields.push("team_name");
        if (!data.members) missingFields.push("members");
        if (!data.domains) missingFields.push("domains");

        return {
            name: fileName,
            members: 0,
            status: "invalid",
            primary: 0,
            subDomains: 0,
            categories: 0,
            subCategories: 0,
            message: gen_error(error_messages["structure_invalid"], {
                file_name: fileName,
                missing_fields: missingFields.join(", ")
            })
        };
    }

    let primary = 0, subDomains = 0, categories = 0, subCategories = 0;

    // Process and validate domains array
    const processDomain = (domain: any) => {
        if (typeof domain !== 'object' || !domain.level || !domain.name) {
            return { valid: false, level: "unknown" };
        }
        switch (domain.level) {
            case "primary":
                primary++;
                break;
            case "sub-domain":
                subDomains++;
                break;
            case "category":
                categories++;
                break;
            case "sub-category":
                subCategories++;
                break;
            default:
                return { valid: false, level: domain.level };
        }
        return { valid: true };
    };

    const domainIssues = data.domains.map(processDomain).filter(result => !result.valid);

    // Validate structure of each member and accumulate issues if any
    const invalidMembers = data.members.filter((member: any) => !member.id || !member.name).length;
    const status = invalidMembers > 0 || domainIssues.length > 0 ? "invalid" : "valid";

    let message = null;
    if (invalidMembers > 0) {
        message = gen_error(error_messages["member_invalid"], {
            team_name: data.team_name,
            member_errors: `${invalidMembers} members have missing id or name fields`
        });
    }
    if (domainIssues.length > 0) {
        const domainMessage = gen_error(error_messages["domain_invalid"], {
            team_name: data.team_name,
            invalid_domains: `${domainIssues.length} domains have invalid structures or levels`
        });
        message = message ? `${message}; ${domainMessage}` : domainMessage;
    }

    return {
        name: data.team_name,
        members: data.members.length,
        status,
        primary,
        subDomains,
        categories,
        subCategories,
        ...(message && { message })
    };
};


//
// Process All Submissions
// 

const analyze_submissions = () => {
    const files = fs.readdirSync(submissions_path).filter((file: string) => file.endsWith('.json'));
    const teams: Array<Object> = [];

    let valid_count = 0, invalid_count = 0, primary_count = 0, subdomain_count = 0, categories_count = 0, subcategories_count = 0;

    files.forEach((file: string) => {
        const filePath = path.join(submissions_path, file);
        const data = readJSONFile(filePath);

        if (!data) {
            teams.push({
                name: file,
                members: 0,
                status: "invalid",
                primary: 0,
                subDomains: 0,
                categories: 0,
                subCategories: 0,
                message: gen_error(error_messages["file_unreadable"], {
                    file_name: file
                })
            });
            invalid_count++;
            return;
        }

        const teamDetails = process_team(data, file);
        teams.push(teamDetails);

        // Update counts
        if (teamDetails.status === "valid") {
            valid_count++;
        } else {
            invalid_count++;
        }
        primary_count += teamDetails.primary;
        subdomain_count += teamDetails.subDomains;
        categories_count += teamDetails.categories;
        subcategories_count += teamDetails.subCategories;
    });

    // Generate final output
    const output = {
        timestamp: new Date().toISOString(),
        count: {
            valid: valid_count,
            invalid: invalid_count,
            primary: primary_count,
            subDomains: subdomain_count,
            categories: categories_count,
            subCategories: subcategories_count,
        },
        teams
    };

    // Write the output JSON file
    fs.writeFileSync(result_path, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`Output written to ${result_path}`);
};

// Execute the main function
analyze_submissions();
