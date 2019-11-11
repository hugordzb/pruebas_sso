const DEV_VARS = {
  SERVERS: {
    AUTH_SERVER: `http://172.20.3.28:8070/wsso/api/v1/auth/login`,
  }

};



export default class Configs {
  constructor() {
    this.current = DEV_VARS;
  }
}