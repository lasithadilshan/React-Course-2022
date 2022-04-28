// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(<p>Hi, my name is Bob!</p>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//      document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)