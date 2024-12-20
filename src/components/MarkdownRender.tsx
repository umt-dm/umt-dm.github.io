import React from 'react';
import { Box, Dialog, DialogContent, Typography, Divider, List, ListItem, Button, ListItemText } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useState } from 'react';
// import Image from 'next/image';
import gfm from 'remark-gfm'
import { Components } from 'react-markdown';

import CodeBlock from './CodeBlock';
import VideoPlayer from './VideoPlayer';

interface CustomMarkdownProps {
  content: string;
}

const MarkdownRender: React.FC<CustomMarkdownProps> = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setModalImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setModalImage(null);
    setOpen(false);
  };

  const renderers : Partial<Components> = {
    img: (props: {src?: string;alt?: string;}) => (
      <img
        src={props.src ?? '/assets/img/placeholder-image.jpg'}
        alt={props.alt ?? 'Image'}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          cursor: 'pointer',
          borderRadius: '8px',
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)', // Example for a box shadow
        }}
        onClick={props.src ? () => handleImageClick(props.src ?? '') : undefined}
      />
    ),
    p: ({ children }: any) => (
      <Typography variant="body1" sx={{ mb: 2, color: 'white' }}>
        {children}
      </Typography>
    ),
    h1: (props: any) => (
      <Typography variant="h2" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    h2: (props: any) => (
      <Typography variant="h3" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    h3: (props: any) => (
      <Typography variant="h4" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    h4: (props: any) => (
      <Typography variant="h5" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    h5: (props: any) => (
      <Typography variant="h6" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    h6: (props: any) => (
      <Typography variant="h6" sx={{ mb: 2, color: 'white' }} {...props} />
    ),
    blockquote: ({ children }: any) => (
      <Box sx={{
        borderLeft: '4px solid',
        borderColor: 'grey.600',
        pl: 2,
        mb: 2,
        color: 'grey.300'
      }}>
        <Typography variant="body1">{children}</Typography>
      </Box>
    ),
    hr: () => (
      <Divider sx={{ my: 4, backgroundColor: 'grey.600' }} />
    ),
    // ul: ({ children }: { children: React.ReactNode }) => (
    //   <List sx={{ pl: 4, mb: 2, padding: 0 }}>
    //     {children}
    //   </List>
    // ),
    // ol: ({ children }: { children: React.ReactNode }) => (
    //   <List sx={{ pl: 4, mb: 2, padding: 0 }}>
    //     {children}
    //   </List>
    // ),
    // li: ({ children }: { children: React.ReactNode }) => (
    //   <ListItem sx={{ padding: 0, color: 'white' }}>
    //     <Typography variant="body1" sx={{ margin: 0 }}>{children}</Typography>
    //   </ListItem>
    // ),

    // ul: CustomList,
    // ol: CustomOrderedList,
    // li: CustomListItem,


    // ul: CustomUl,
    // ol: CustomOl,
    // li: CustomLi,


    // ul: ({ children }) => <CustomUl>{children}</CustomUl>,
    // ol: ({ children }) => <CustomOl>{children}</CustomOl>,
    // li: ({ children }) => <CustomLi>{children}</CustomLi>,

    ul: ({ children }: any) => (
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginBottom: '20px' }}>
        {children}
      </ol>
    ),
    // li: ({ children }: any) => (
    //   <li>{children}</li>
    // ),

    a: ({ href, children, ...rest }: { href?: string; children?: React.ReactNode, rest?: any }) => (
      <Button 
        href={href} 
        rel="noopener noreferrer" 
        variant="text" 
        color="primary"
        sx={{ textDecoration: 'underline', mb: 1 }}
        {...rest}
      >
        {children}
      </Button>
    ),

    table: ({ children, ...rest }: any) => (
      <Box sx={{ overflowX: 'auto', mb: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }} {...rest}>
          {children}
        </table>
      </Box>
    ),
    thead: ({ children, ...rest }: any) => (
      <thead style={{ backgroundColor: 'grey.800' }} {...rest}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...rest }: any) => (
      <tbody style={{ backgroundColor: 'grey.700' }} {...rest}>{children}</tbody>
    ),
    tr: ({ children, ...rest }: any) => (
      <tr style={{ borderBottom: '1px solid transparent' }} {...rest}>{children}</tr>
    ),
    th: ({ children, ...rest }: any) => (
      <th 
        style={{
          padding: '8px', 
          color: 'white', 
          textAlign: 'left', 
          borderBottom: '1px solid white', // White border for headers
        }}
        {...rest}
      >
        {children}
      </th>
    ),
    td: ({ children, ...rest }: any) => (
      <td 
        style={{
          padding: '8px', 
          color: 'white', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        {...rest}
      >
        {children}
      </td>
    ),
    
    video: (props: { src?: string; controls?: boolean; }) => (
      <Box sx={{ width: '100%', mb: 2 }}>
        <VideoPlayer src={props.src}/>
      </Box>
    ),


    code: ({ className, children }) => {
      const language = className?.replace('language-', '') || 'text';
      return <CodeBlock language={language} value={String(children).trim()} />;
    },
  };

  return (
    <>
      <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} components={renderers}>{content}</ReactMarkdown>
      <Dialog open={open} onClose={handleClose} maxWidth="md" >
        <DialogContent>
          {modalImage && (
            <img
              src={modalImage}
              alt="Enlarged view"
              style={{
                display: 'block',
                maxWidth: '100%',
                cursor: 'pointer',
                borderRadius: '8px',
                boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)', // Example for a box shadow
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MarkdownRender;
