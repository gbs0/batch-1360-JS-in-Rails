import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert"
export default class extends Controller {
  static targets = ["list", "form"]

  send(event) {
    event.preventDefault()
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { accept: "text/plain" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then(data => {
        this.listTarget.insertAdjacentHTML('beforeend', data)
      }
    )
    this.formTarget.reset()
  }

  connect() {}
}
