exports.homePage = (req, res, next) => {
  // // !! Session !!

  // // req.session.user = {
  // //     name: 'Raul',
  // //     loggedIn: true
  // // };
  // //
  // // até sem declarar a req.session.user,
  // // como os cookies estão configurados para
  // // perdurar por 7 dias, esses dados continuarão
  // // salvos por mais 7 dias

  // console.log(req.session.user);

  // // !! Flash Messages !!
  // // req.flash('info', 'Test info');
  // // req.flash('error', 'Test error');
  // // req.flash('success', 'Test success');
  // //
  // // as flash messages só ocorrem da primeira vez que
  // // a página é reiniciada, após isso, elas não tem mais
  // // valor, por isso o nome

  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));

  console.log();
  console.log("Responding client");
  console.log();
  res.render("index", {
    title: 'Title of the <span style="background: #ccc">page</span>',
    numbers: [2, 4, 1, 2, 2, 0, 0, 6],
  });
  next();
  // colocando o next para que
  // a função anônima do terceiro
  // middleware execute
};

exports.handlePost = (req, res) => {
  res.render("post");
  console.log(req.body);
};
