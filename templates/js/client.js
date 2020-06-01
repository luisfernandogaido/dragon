fetch('https://cnc.profinanc.com.br/hello').then(res => res.text()).then(t => {
  console.log(t);
});

