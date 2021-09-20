import moment from "moment";
//const server = "https://dev-api2.hicare.net";
const server = "http://localhost:3000";
export class DocotrDataProvider {
  public async openCall(insungSeq: any): Promise<any> {
    const resp = await fetch(server + "/videocall/openCall/" + insungSeq, {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }

  public async startArchive(sessionId: string): Promise<any> {
    const resp = await fetch(server + "/videocall/startArchive/" + sessionId, {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }

  public async stopArchive(archiveId: string): Promise<any> {
    const resp = await fetch(server + "/videocall/stopArchive/" + archiveId, {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }
  public async getArchive(archiveId: string): Promise<any> {
    const resp = await fetch(server + "/videocall/getArchive/" + archiveId, {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }
  public async GetAppointment(fromDt: any, toDt: any): Promise<any> {
    const resp = await fetch(
      server +
        "/doctor/getAppointment?fromDt=" +
        moment(fromDt).format("YYYY-MM-DD").toString() +
        "&toDt=" +
        moment(toDt).format("YYYY-MM-DD").toString(),
      {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      }
    );

    const data = await resp.json();
    return data;
  }
  public async GetMessageList(): Promise<any> {
    const resp = await fetch(server + "/doctor/getMessageList", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });

    const data = await resp.json();
    return data;
  }

  public async GetAssessmentList(): Promise<any> {
    const resp = await fetch(server + "/doctor/getAssessmentList", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });

    const data = await resp.json();
    return data;
  }
  public async GetPatientMeasureList(): Promise<any> {
    const resp = await fetch(server + "/doctor/getPatientMeasureList", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });

    const data = await resp.json();
    return data;
  }
  public async GetPatientList(): Promise<any> {
    const resp = await fetch(server + "/doctor/getPatientList", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });

    const data = await resp.json();
    return data;
  }

  public async loginDoctor(id: any, pwd: any): Promise<any> {
    const resp = await fetch(server + "/doctor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_id: id,
        password: pwd,
      }),
    });

    const data = await resp.json();
    return data;
  }
}
