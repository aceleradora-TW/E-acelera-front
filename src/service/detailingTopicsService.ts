import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";

interface Item {
    field: {
        title: string;
        description: string;
        videoLink: string;
        video: string;
        videoReference: string;
        videoDescription: string;                                  
        exercises: string;
        exercisesDescription: string;
        exercisesInfo: string;
        references: string;
        rowId: string;
    };
  }

export const getTopics = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/topics", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        }); 
     
        const filteredData: DataItem[] = response.data.data.map((item: Item) => {
            
            const field: FilteredItem = {
                title: item.field.title,
                description: item.field.description,
                videoLink: item.field.videoLink,
                video: item.field.video,
                videoReference: item.field.videoReference,
                videoDescription: item.field.videoDescription,                                  
                exercises: item.field.exercises,
                exercisesDescription: item.field.exercisesDescription,
                exercisesInfo: item.field.exercisesInfo,
                references: item.field.references,
                rowId: item.field.rowId  
            };
            
            return { 
                id:item.field.rowId,
                field
            }
        });
        
        const data: ApiResponse = { data: filteredData };
        return data;

    } catch (error) {
        return null
    }
};
  