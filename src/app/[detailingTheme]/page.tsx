"use client";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { ApiResponse } from "@/types/type";
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";


export default function Home({
  params,
}: {
  params: { detailingTheme: string };
}) {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const id = params.detailingTheme;

  function extractID(pathname: string) {
    const id = pathname.split("-")[0];
    return id
  }

  function TopicsSeparator(topics: string){
    const topic = topics.split(",")
    console.log(topic)
    return topic
  }


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/stackbyApi/Themes`, {
          method: "GET",
        });
        const parseData: ApiResponse = await response.json();
        setRenderData(parseData);
        console.log(await parseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(renderData);

  return (
    <>
      <main>
        <Grid container spacing={2} sx={{ margin: "80px 80px" }}>
          {renderData &&
            renderData.data
              .filter((element: any) => element.id === extractID(id))
              .map((element: any, index: any) => (
                <>
                  <Title text={element.field.title} />
                  <Typography>{element.field.description}</Typography>

                  <Title text={"Tópicos"} />
                  <Grid>{TopicsSeparator(element.field.topics).map((x: any, y:any) =>(<>
                    <BaseCard
                    title={x}
                    description={TopicsSeparator(element.field.topicsDescription)[y]}
                    route={TopicsSeparator(element.field.topicsInfo)[y]}
                  />
                  </>))}</Grid>
                </>
              ))}
        </Grid>
      </main>
    </>
  );
}
