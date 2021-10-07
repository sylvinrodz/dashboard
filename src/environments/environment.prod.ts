export const environment = {
  production: true,
  projectName:'samruddhi2',
  Role:'questions',
  firebase: {
    apiKey: "AIzaSyC8DgwGX2cVSP_6L2xD5frZlWStHuCcj7g",
  authDomain: "samruddhi2.firebaseapp.com",
  projectId: "samruddhi2",
  storageBucket: "samruddhi2.appspot.com",
  messagingSenderId: "880712870302",
  appId: "1:880712870302:web:d70259dc699537b6eb0e8f"
  },
  selectTable:"0",
  counts:[
    {
        "name":"Total Active Users",
        "urlName":"count",
        "count":0
    },
    // {
    //     "name":"Total Hearts",
    //     "urlName":"likes",
    //     "count":0
    // },
    // {
    //     "name":"Total Likes",
    //     "urlName":"thumbs",
    //     "count":0
    // }
],
  tables:[
    
      {
        name:"login",
        headerName:"loginHeaders",
        path:"users",
        sortBy:"loginAt",
        order:'desc'
      },
      {
        name:"signup",
        headerName:"signupHeaders",
        path:"users",
        sortBy:"name1",
        order:'asc'
      },
      {
        name:"Questions",
        headerName:"questionsHeaders",
        path:"questions",
        sortBy:"updatedAt",
        order:'desc'
      }
    
  ],
  signupHeaders:[
    {
      name:"Title",
      object:"title",
      type:'value'
    },
    {
      name:"Name",
      object:"name",
      type:'value'
    },
    {
      name:"Email",
      object:"email",
      type:'value'
    },
    {
      name:"Contact No.",
      object:"contactNo",
      type:'value'
    },
    {
      name:"City",
      object:"city",
      type:'value'
    },
    {
      name:"State",
      object:"state",
      type:'value'
    },
    {
      name:"Signup",
      object:"signupAt",
      type:'time'
    },
  ],
  loginHeaders:[
    {
      name:"Title",
      object:"title",
      type:'value'
    },
    {
      name:"Name",
      object:"name",
      type:'value'
    },
    {
      name:"Email",
      object:"email",
      type:'value'
    },
    {
      name:"Contact No.",
      object:"contactNo",
      type:'value'
    },
    {
      name:"City",
      object:"city",
      type:'value'
    },
    {
      name:"State",
      object:"state",
      type:'value'
    },
    {
      name:"Login",
      object:"isLogin",
      type:'value'
    },
    {
      name:"Login At",
      object:"loginAt",
      type:'time'
    },
    {
      name:"Logout At",
      object:"logoutAt",
      type:'time'
    },
    {
      name:"Action",
      object:"isLogin",
      type:'action',
    }
  ],
  questionsHeaders:[
    {
      name:"Question",
      object:"question",
      type:'value'
    },
    {
      name:"name",
      object:"name",
      type:'value'
    },
    // {
    //   name:"email",
    //   object:"user",
    //   type:'array'
    // },
    {
      name:"Contact No.",
      object:"contactNo",
      type:'value'
    },
    {
      name:"Date & Time",
      object:"updatedAt",
      type:'time'
    }
  ],
};
