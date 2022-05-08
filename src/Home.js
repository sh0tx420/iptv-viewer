import React from "react";
import { Card, Heading, Box } from "rebass";
import { Label, Select } from "@rebass/forms";
import theme from "./theme";
import ReactHlsPlayer from "react-hls-player";


export default function Home() {

    const xhr = new XMLHttpRequest();
    const streams = [];

    xhr.onload = () => {
        if (xhr.status == 200) {
            const res = JSON.parse(xhr.response);

            for (let i = 0; i < res.length; i++) {
                streams.push(res[i].name.replace(".m3u", ""));
            }
        }
    };

    xhr.open(
        "GET",
        "https://api.github.com/repos/iptv-org/iptv/contents/streams"
    );
    xhr.send();


    return (
        <React.Fragment>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(128px, 0.28fr))", width: "100%", height: "100%" }}>
                <Card
                    width={512}
                    height={512}
                    p={2}
                    sx={{
                        backgroundColor: "#1C1E1F",
                        boxShadow: "4px 4px 4px black",
                        marginTop: 300
                    }}
                >
                    <Heading as="h3" sx={{ textAlign: "center" }}>
                        Choose stream
                    </Heading>

                    <Box>
                        <Label htmlFor="country" sx={{ marginBottom: 2 }}>Country</Label>
                        <Select
                            id="country"
                            name="country"
                            defaultValue="ua"
                            sx={{ color: theme.colors.primary, borderRadius: 100 }}
                        >
                            {
                                streams.map(
                                    ([key, country]) =>
                                        <option key={key}>
                                            {country}
                                        </option>
                                )
                            }
                        </Select>
                    </Box>
                </Card>

                <Card
                    width="70vw"
                    height="70vh"
                    p={2}
                    sx={{
                        backgroundColor: "#1C1E1F",
                        boxShadow: "4px 4px 4px black",
                        marginTop: 150
                    }}
                >
                    <Heading as="h3" sx={{ textAlign: "center", marginBottom: 2.5 }}>Current stream:</Heading>
                    <ReactHlsPlayer
                        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                        autoPlay={false}
                        controls={false}
                        width="100%"
                        height="auto"
                    />
                </Card>
            </Box>
        </React.Fragment>
    );
}