import React, { Component } from "react";
import Layout from "./components/Layout";
import Modal from "./components/Modal/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";
import tabs from "./tabs.json";

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Layout>
        <div>
          <button type="button" onClick={this.toggleModal}>
            {showModal ? "Hide" : "Show"} modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h1>Clock Modal</h1>
              <Clock />
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </Modal>
          )}
        </div>

        <Tabs items={tabs} />
      </Layout>
    );
  }
}
