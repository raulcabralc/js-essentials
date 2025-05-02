const whiteList = ["http://35.198.38.2", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      new Error("Not allowed by CORS");
    }
  },
};

export { corsOptions };
