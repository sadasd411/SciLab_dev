import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, navigate, Navigate } from "@reach/router";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import path from "path";
import { nanoid } from "nanoid";
const Update = (props) => {
  const [procedureName, setProcedureName] = useState("");
  const [state, setState] = useState("");
  const [errs, setErrs] = useState("");
  const updateRef = useRef();
  const [update, setForceUpdate] = useState(false);
  console.log("data", props);
  const handleEditorChange = (e) => {
    //console.log("Content was updated:", e.target.getContent());
  };
  

 

  useEffect(() => {
    axios.get("http://localhost:8000/api/procedure/" + props.id).then((res) => {
      console.log(res.data );
      setProcedureName(res.data.procedureName);

      setState(() => res.data.html);
    });
  }, []);
  
  return (
    <div>
      {console.log("stating", state)}
      <div className="divInline">
        <h1>SciLab</h1>
        <p className="linkToRight">
          <Link to={"/"}>back to home</Link>
        </p>
      </div>

      <form className="divBorder" >
        <button type="submit" value="refresh" ref={updateRef} onClick={fetch} />
        <div className="row">
          <div className="column left">
            <br />
            <br />
            <label>Procedure Name:</label>
            <input
              type="text"
              value={procedureName}
              onChange={(e) => setProcedureName(e.target.value)}
            />
            {errs.procedureName ? (
              <span className="error-text">{errs.procedureName.message}</span>
            ) : null}
            {procedureName.length < 3 && procedureName.length > 0 ? (
              <span className="error-text">Procedure Name &gt; 3 </span>
            ) : null}
            {
              state === "" ? 
                <p>Loading</p>
                : (
                  <Editor
              id="myTiny_Mce"
              initialValue="<p>Initial content</p>"
              apiKey="au50u78j9vjabzcr4icg4v3oknubu08ifv9rfstawlzmdobp"
              init={{
                height: "50vh",
                menubar: true,
                selector: "textarea",
                external_plugins: {
                  tiny_mce_wiris: `${path.join(
                    __dirname,
                    "../../../../node_modules/@wiris/mathtype-tinymce5/plugin.min.js"
                  )}`,
                },
                plugins: [
                  "advlist autolink lists link image code textpattern template",
                  "charmap print preview anchor help",
                  "searchreplace visualblocks code",
                  "insertdatetime media table advtablesort paste wordcount save",
                ],
                toolbar: `undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help | image code table customInsertButton customDateButton template tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry`,
                image_advtab: true,
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
                file_picker_callback: function (cb, value, meta) {
                  var input = document.createElement("input");
                  input.setAttribute("type", "file");
                  input.setAttribute("accept", "image/*");
                  input.onchange = function () {
                    var file = this.files[0];

                    var reader = new FileReader();
                    reader.onload = function () {
                      var id = "blobid" + new Date().getTime();
                      var blobCache =
                        window.tinymce.activeEditor.editorUpload.blobCache;
                      var base64 = reader.result.split(",")[1];
                      var blobInfo = blobCache.create(id, file, base64);
                      blobCache.add(blobInfo);
                      cb(blobInfo.blobUri(), { title: file.name });
                    };
                    reader.readAsDataURL(file);
                  };

                  input.click();
                },
                // Often you will want the editor populated with content as soon as it’s initialized. In this case, you can use the setup option in the editor config.
                //https://www.tiny.cloud/blog/how-to-get-content-and-set-content-in-tinymce/
                setup: function (editor) {
                  editor.on('init', function(e){
                    editor.setContent(state)
                  })
                  //
                  editor.ui.registry.addButton("customInsertButton", {
                    icon: "edit-block",
                    tooltip: "Insert Input Element",
                    onAction: function (_) {
                      const value = nanoid(7);
                      editor.insertContent(
                        `&nbsp;<input type='text' id='value_${value}' name='value_${value}'>&nbsp;`
                      );
                    },
                  });

                  var toTimeHtml = function (date) {
                    return (
                      '<time datetime="' +
                      date.toString() +
                      '">' +
                      date.toDateString() +
                      "</time>"
                    );
                  };

                  editor.ui.registry.addButton("customDateButton", {
                    icon: "insert-time",
                    tooltip: "Insert Current Date",
                    disabled: true,
                    onAction: function (_) {
                      editor.insertContent(toTimeHtml(new Date()));
                    },
                    onSetup: function (buttonApi) {
                      var editorEventCallback = function (eventApi) {
                        buttonApi.setDisabled(
                          eventApi.element.nodeName.toLowerCase() === "time"
                        );
                      };
                      editor.on("NodeChange", editorEventCallback);

                      /* onSetup should always return the unbind handlers */
                      return function (buttonApi) {
                        editor.off("NodeChange", editorEventCallback);
                      };
                    },
                  });
                },
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              value={state}
             
            />
                )
            }

            
          </div>
        </div>
      
        <div align="center">
          <button type="submit">Edit Procedure</button>
        </div>
      </form>
    </div>
  );
};
export default Update;
