import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["form"]

  connect() {}

  display() {

    // Localizar o form no HTML
    // Trocar a classe p/ uma classe visivel
    this.formTarget.classList.toggle("d-none")
  }
}
