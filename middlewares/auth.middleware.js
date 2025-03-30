module.exports = (req, res, next) => {
  // const pathName = req.baseUrl + req.path;
  // console.log("req: ", req);
  
  // console.log(req.body, pathName);
  // if (req.user && pathName === "/admin/login") {
  //   return res.redirect("/admin");
  // }

  // if (req.user ||  pathName === "/admin/login") {
  //     return next();
  // }

  // return res.redirect("/admin");
  next();
};
