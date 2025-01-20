import React from "react";

function Footer() {
  return (
    <footer className="chat-footer">
      <div id="chat-box">
        <p>Posez-moi vos questions ici !</p>
        <input type="text" placeholder="Écrivez un message..." />
        <button>Envoyer</button>
      </div>
    </footer>
  );
}

export default Footer;
