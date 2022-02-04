class MyForm extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: "open"})
    let form = document.createElement("form")
    form.setAttribute("class", "form")
    let user = document.createElement("input")
    user.setAttribute("id", "user")
    user.type = "text"
    user.oninput = (e) => this.updateForm()
    let pass = document.createElement("input")
    pass.setAttribute("id", "pass")
    pass.type = "password"
    pass.oninput = (e) => this.updateForm()
    let submit = document.createElement("button")
    submit.setAttribute("id", "submit")
    submit.textContent = "Submit"
    submit.disabled = true
    let style = document.createElement("style")
    style.textContent = `
      .form {
        display: flex;
        flex-direction: column;
      }
    `
    form.onsubmit = (e) => {
      e.preventDefault()
      console.log(`Form submitted. User ${user.value}.`)
    }
    form.appendChild(user)
    form.appendChild(pass)
    form.appendChild(submit)
    form.appendChild(style)
    shadow.appendChild(form)
  }

  updateForm() {
    if (this.shadowRoot) {
      let submit = this.shadowRoot.getElementById("submit") as HTMLButtonElement
      let user = this.shadowRoot.getElementById("user") as HTMLInputElement
      let pass = this.shadowRoot.getElementById("pass") as HTMLInputElement
      submit.disabled = user.value.length === 0 || pass.value.length === 0
    }
  }
  // static get observedAttributes() { return ["username", "password"] }
}

class MyElement extends HTMLElement {
  private _name: string
  private shadow: ShadowRoot
  constructor() {
    super();
    this._name = "hmm"
    this.shadow = this.attachShadow({mode: "open"})
  }

  render() {
    let div = document.createElement("div")
    div.setAttribute("id", "msg-div")
    let msgOpt = this.getAttribute("message")
    let nameTxt = this._name ? `Name: '${this._name}'.` : "No name."
    let attrTxt = msgOpt ? `Motd: '${msgOpt}'.` : "No motd."
    div.textContent = `${attrTxt} ${nameTxt}`
    this.shadow.replaceChildren(div)
  }

  set name(v: string) {
    console.log(`Set name to ${v}`)
    this._name = v
    this.render()
  }

  connectedCallback() {
    console.log("connected!")
  }

  disconnectedCallback() {
    console.log("disconnected!")
  }

  attributeChangedCallback(name: any, oldVal: any, newVal: any) {
    console.log(`Attribute: ${name} changed!`)
    this.render()
  }

  adoptedCallback() {
    console.log("adopted!")
  }

  static get observedAttributes() { return ["message"] }
}

class MyElements extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: "open"})
    let button = document.createElement("button")
    button.textContent = "Click"
    button.onclick = (e) => {
      console.log("Clicked it.")
      let motd = document.createElement("my-element") as MyElement
      motd.setAttribute("message", "from click 1")
      motd.name = "Hejsan"
      shadow.appendChild(motd)
    }
    shadow.appendChild(button)
  }
}

class InputEcho extends HTMLElement {
  private shadow: ShadowRoot

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"})
    this.render()
  }

  render() {
    let inp = document.createElement("input")
    let span = document.createElement("span")
    inp.oninput = (e) => {
      span.textContent = inp.value
    }
    let div = document.createElement("div")
    div.appendChild(inp)
    div.appendChild(span)
    this.shadow.appendChild(div)
  }
}

window.customElements.define("my-element", MyElement)
window.customElements.define("my-elements", MyElements)
window.customElements.define("my-form", MyForm)
window.customElements.define("my-input", InputEcho)
