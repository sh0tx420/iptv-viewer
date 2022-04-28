import React from "react";
import { Card, Text } from "rebass";


export default function Home() {
    return (
        <React.Fragment>
            <Card
                width={256}
                height={256}
                p={2}
                sx={{
                    backgroundColor: "#1C1E1F",
                    boxShadow: "4px 4px 4px black",
                    marginTop: 300
                }}
            >
                <Text>helo</Text>
            </Card>
        </React.Fragment>
    );
}