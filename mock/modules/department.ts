import { department } from "../Data/Account";
const departmentApi = {
  "post|/api/user/department": (query: any) => {
    return {
      status: 200,
      message: "success",
      data: department
    };
  }
};

export default departmentApi;
