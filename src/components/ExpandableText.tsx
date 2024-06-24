import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface Props {
    children: string;
}
const ExpandableText = ({children}: Props) => {
    //using local state is fine as no need to store a simple text expander in zustand/redux store

    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;
    
    if(children.length <= limit)
        return <Text>{children}</Text>

        const summary = expanded ? children : children.substring(0, limit) + '...' ;
  return (
    <Text>{summary}
    <Button size='xs' marginLeft={2} fontWeight='bold' colorScheme="blackAlpha" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Read More'}
    </Button>
    </Text>
  )
}

export default ExpandableText