/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Dialog as RadixThemesDialog, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Box, Center, Code, Heading, HStack, Image as ChakraImage, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, OrderedList, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Hstack_614b6428634cc4e4ce817a5d5adb92a5 () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"background": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `#F5EFFE` : `transparent`, "color": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}}>
  <ChakraImage src={`/github.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Home`}
</Text>
</HStack>
  )
}

        function ComponentMap_624ac3e036cb9b7f9ab4c0982cc19bde () {
            const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <Heading as={`h1`} size={`2xl`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "h2": ({node, children, ...props}) => <Heading as={`h2`} size={`xl`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "h3": ({node, children, ...props}) => <Heading as={`h3`} size={`lg`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "h4": ({node, children, ...props}) => <Heading as={`h4`} size={`md`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "h5": ({node, children, ...props}) => <Heading as={`h5`} size={`sm`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "h6": ({node, children, ...props}) => <Heading as={`h6`} size={`xs`} sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}} {...props}>   {children} </Heading>, "p": ({node, children, ...props}) => <Text sx={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>   {children} </Text>, "ul": ({node, children, ...props}) => <UnorderedList sx={{"marginTop": "1em", "marginBottom": "1em"}}>   {children} </UnorderedList>, "ol": ({node, children, ...props}) => <OrderedList sx={{"marginTop": "1em", "marginBottom": "1em"}}>   {children} </OrderedList>, "li": ({node, children, ...props}) => <ListItem sx={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>   {children} </ListItem>, "a": ({node, children, ...props}) => <Link as={``} sx={{"fontWeight": "bold", "color": "#03030B", "textDecoration": "underline", "textDecorationColor": "#AD9BF8", "_hover": {"color": "#AD9BF8", "textDecoration": "underline", "textDecorationColor": "#03030B"}}} {...props}>   {children} </Link>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <Code sx={{"color": "#1F1944", "background": "#EAE4FD"}} {...props}>   {children} </Code>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((colorMode) === ("light"))) ? oneLight : oneDark} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((colorMode) === ("light"))) ? oneLight : oneDark} children={children} {...props}/>}
            )
        }
        

export function Hstack_688bcc6167fbb869e9c5522b503840fc () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"background": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `#F5EFFE` : `transparent`, "color": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}}>
  <ChakraImage src={`/github.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Settings`}
</Text>
</HStack>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Hstack_a363bdfe3c3680c0dd18567ed924050d () {
  const state = useContext(StateContexts.state)


  return (
    <HStack sx={{"background": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `#F5EFFE` : `transparent`, "color": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}}>
  <ChakraImage src={`/github.svg`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Dashboard`}
</Text>
</HStack>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <Box sx={{"display": ["none", "none", "block"], "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid #F4F3F6"}}>
  <VStack sx={{"height": "100dvh"}}>
  <HStack sx={{"width": "100%", "borderBottom": "1px solid #F4F3F6", "padding": "1em"}}>
  <ChakraImage src={`/icon.svg`} sx={{"height": "2em"}}/>
  <Spacer/>
  <Link as={NextLink} href={`https://github.com/reflex-dev/reflex`}>
  <Center sx={{"boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "background": "transparent", "borderRadius": "0.375rem", "_hover": {"background": "#F5EFFE"}}}>
  <ChakraImage src={`/github.svg`} sx={{"height": "3em", "padding": "0.5em"}}/>
</Center>
</Link>
</HStack>
  <VStack alignItems={`flex-start`} sx={{"width": "100%", "overflowY": "auto", "padding": "1em"}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  <Hstack_614b6428634cc4e4ce817a5d5adb92a5/>
</Link>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  <Hstack_a363bdfe3c3680c0dd18567ed924050d/>
</Link>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  <Hstack_688bcc6167fbb869e9c5522b503840fc/>
</Link>
</VStack>
  <Spacer/>
  <HStack sx={{"width": "100%", "borderTop": "1px solid #F4F3F6", "padding": "1em"}}>
  <Spacer/>
  <Link as={NextLink} href={`https://reflex.dev/docs/getting-started/introduction/`}>
  <Text>
  {`Docs`}
</Text>
</Link>
  <Link as={NextLink} href={`https://reflex.dev/blog/`}>
  <Text>
  {`Blog`}
</Text>
</Link>
</HStack>
</VStack>
</Box>
  <Box sx={{"paddingTop": "5em", "paddingInlineStart": ["auto", "2em"], "paddingInlineEnd": ["auto", "2em"], "flex": "1"}}>
  <Box sx={{"alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} components={ComponentMap_624ac3e036cb9b7f9ab4c0982cc19bde()}>
  {`# Welcome to Reflex!

This is the base Reflex template - installed when you run \`reflex init\`.

If you want to use a different template, pass the \`--template\` flag to \`reflex init\`.
For example, if you want a more basic starting point, you can run:

\`\`\`bash
reflex init --template blank
\`\`\`

## About this Template

This template has the following directory structure:

\`\`\`bash
├── README.md
├── assets
├── rxconfig.py
└── {your_app}
    ├── __init__.py
    ├── components
    │   ├── __init__.py
    │   └── sidebar.py
    ├── pages
    │   ├── __init__.py
    │   ├── dashboard.py
    │   ├── index.py
    │   └── settings.py
    ├── styles.py
    ├── templates
    │   ├── __init__.py
    │   └── template.py
    └── {your_app}.py
\`\`\`

See the [Project Structure docs](https://reflex.dev/docs/getting-started/project-structure/) for more information on general Reflex project structure.

### Adding Pages

In this template, the pages in your app are defined in \`{your_app}/pages/\`.
Each page is a function that returns a Reflex component.
For example, to edit this page you can modify \`{your_app}/pages/index.py\`.
See the [pages docs](https://reflex.dev/docs/components/pages/) for more information on pages.

In this template, instead of using \`rx.add_page\` or the \`@rx.page\` decorator,
we use the \`@template\` decorator from \`{your_app}/templates/template.py\`.

To add a new page:

1. Add a new file in \`{your_app}/pages/\`. We recommend using one file per page, but you can also group pages in a single file.
2. Add a new function with the \`@template\` decorator, which takes the same arguments as \`@rx.page\`.
3. Import the page in your \`{your_app}/pages/__init__.py\` file and it will automatically be added to the app.


### Adding Components

In order to keep your code organized, we recommend putting components that are
used across multiple pages in the \`{your_app}/components/\` directory.

In this template, we have a sidebar component in \`{your_app}/components/sidebar.py\`.

### Adding State

As your app grows, we recommend using [substates](https://reflex.dev/docs/state/substates/)
to organize your state.
You can either define substates in their own files, or if the state is
specific to a page, you can define it in the page file itself.
`}
</ReactMarkdown>
</Box>
</Box>
  <Box sx={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <Menu>
  <MenuButton sx={{"width": "3em", "height": "3em", "backgroundColor": "white", "border": "1px solid #F4F3F6", "borderRadius": "0.375rem"}}>
  <HamburgerIcon sx={{"size": "4em", "color": "black"}}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"_hover": {"background": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  {`Home`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"background": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  {`Dashboard`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"background": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  {`Settings`}
</Link>
</MenuItem>
  <MenuDivider/>
  <MenuItem sx={{"_hover": {"background": "#F5EFFE"}}}>
  <Link as={NextLink} href={`https://github.com/reflex-dev`} sx={{"width": "100%"}}>
  {`About`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"background": "#F5EFFE"}}}>
  <Link as={NextLink} href={`mailto:founders@=reflex.dev`} sx={{"width": "100%"}}>
  {`Contact`}
</Link>
</MenuItem>
</MenuList>
</Menu>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/github.svg`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
