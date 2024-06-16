import { DataProps } from "@/interfaces";

export async function getData() {
  try {
    const response = await fetch("http://localhost:8000/motorcycles");
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function createData(data: DataProps) {
  try {
    const response = await fetch("http://localhost:8000/motorcycles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
