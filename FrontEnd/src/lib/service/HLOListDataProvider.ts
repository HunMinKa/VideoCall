import OpenTok from "opentok";

export class HLOListDataProvider {
  public async GetHicareLicence(): Promise<any> {
    const resp = await fetch("http://localhost:3000/licence/list", {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }

  public async addHicareLicence(licence: any): Promise<any> {
    const resp = await fetch("http://localhost:3000/licence/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(licence),
    });

    const data = await resp.json();
    return data;
  }

  public async loginDoctor(id: any, pwd: any): Promise<any> {
   
    const resp = await fetch("http://localhost:3000/doctor/login", {
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
  public async openCall(): Promise<any> {
    const resp = await fetch("https://dev-api.hicare.net/videocall/openCall", {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  }
}
