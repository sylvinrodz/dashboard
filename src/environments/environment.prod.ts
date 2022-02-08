export const environment = {
  production: true,
  projectName:'Vayego',
  Role:'admin',
  firebase: {
    apiKey: "AIzaSyB_T_CC4lz8-S3t9uF0Wm5xzsbCOWVFavc",
    authDomain: "vayego-84bc6.firebaseapp.com",
    projectId: "vayego-84bc6",
    storageBucket: "vayego-84bc6.appspot.com",
    messagingSenderId: "555014108085",
    appId: "1:555014108085:web:1ab03c57fb495984b8dffc"
  },
  selectTable:"0",
  counts:[
    // {
    //     "name":"Total Active Users",
    //     "urlName":"count",
    //     "count":0
    // },
    // {
    //     "name":"Total Hearts",
    //     "urlName":"likes",
    //     "count":0
    // },
    {
        "name":"Total Likes",
        "urlName":"thumbs",
        "count":0
    }
],
  tables:[
    
      {
        name:"login",
        headerName:"loginHeaders",
        path:"users",
        sortBy:"name",
        order:'asc'
      },
      {
        name:"signup",
        headerName:"signupHeaders",
        path:"comments",
        sortBy:"date",
        order:'desc'
      },
      {
        name:"contactus",
        headerName:"questionsHeaders",
        path:"contactus",
        sortBy:"date",
        order:'desc'
      }
    
  ],
  signupHeaders:[
    {
      name:"Name",
      object:"name",
      type:'value'
    },
    {
      name:"Message",
      object:"message",
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
      name:"Photos",
      object:"photos",
      type:'array'
    },
    {
      name:"Enable",
      object:"enable",
      type:'action'
    },
    {
      name:"Date",
      object:"date",
      type:'time'
    }
  ],
  loginHeaders:[
    {
      name:"Name",
      object:"name",
      type:'value'
    },
    {
      name:"DP",
      object:"pic",
      type:'img'
    },
    {
      name:"Mobile Number",
      object:"mobileNumber",
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
      name:"Points",
      object:"points",
      type:'value'
    },
    {
      name:"Email",
      object:"email",
      type:'value'
    },
    {
      name:"Pincode",
      object:"pincode",
      type:'value'
    },
    {
      name:"Crops",
      object:"crops",
      type:'value'
    },
    {
      name:"Fruits",
      object:"fruits",
      type:'value'
    },
    {
      name:"Vegetables",
      object:"vegetables",
      type:'value'
    },
    {
      name:"Signup",
      object:"loginAt",
      type:'time'
    }
  ],
  questionsHeaders:[
    {
      name:"Name",
      object:"name",
      type:'value'
    },
    {
      name:"Mobile Number",
      object:"mobileNumber",
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
      name:"Message",
      object:"message",
      type:'value'
    },
    
     {
      name:"Date",
      object:"date",
      type:'time'
    }
 
  ],
};
