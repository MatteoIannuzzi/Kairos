import React from "react";

function FacebookPost() {
  return (
    <div className="box-custom-satin-glass box-facebook box-if">
      <div>
        <iframe
          className="if-fb"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkairosbar14%2Fposts%2Fpfbid02HB5S7pHaQMw8r6fbERChdun7T8JsPDvMGWYCQDvvt1gkH5bMbgJLqNjfiUi1oofFl&show_text=true&width=450"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Post di Facebook"
        ></iframe>
      </div>

      <div className="box-text">
        <h2 className="mb-3 text-white display-4 fw-bold ">
          Buon Compleanno Kairòs
        </h2>
        <p className="lead text-white">Scarica subito le tuo foto!</p>
      </div>
    </div>
  );
}

export default FacebookPost;
