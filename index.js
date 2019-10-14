function main() {
  const vm = require("vm");

  const context = vm.createContext();

  const wrapper = code =>
    `(function(exports, require, module, __filename, __dirname, opts) {${code}\n});`;

  const code = `try { throw new Error() } catch (e) { opts.stack = e.stack }`;

  const opts = {
    stack: null
  };

  vm.runInContext(wrapper(code), context, { filename: "fake" })(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    opts
  );
  return opts;
}

if (process.env.RUN) {
  console.log(main().stack);
}

module.exports = main;
