import axios from "axios";

export async function createTeam(data) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://20.244.48.88:8000/api/team_management_handler/",
      data: data,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}