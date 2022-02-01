import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FileUpload from "./FileUpload";

export default function EditOverlay({ session, overlay, eventlogo }: any) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  function handleDelete() {
    axios
      .delete(`https://strapi.peaklinems.de/overlays/${overlay.id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzNTk5MDUyLCJleHAiOjE2NDYxOTEwNTJ9.s7ql6-X_SmGBWObZxmcNYs0C4NnV4UGguyfdhO4VA18`,
        },
      })
      .then(function () {
        router.push("/streaming");
      })
      .catch(function () {
        alert("Löschen fehlgeschlagen.");
      });
  }

  if (session.name === overlay.userID) {
    return (
      <section>
        <section>
          <Formik
            initialValues={{
              bezeichnung: overlay.bezeichnung,
              userID: overlay.userID,
              slug: overlay.slug,
              type: overlay.type,
              camera: overlay.camera,
              teamlogo: overlay.teamlogo,
              sponsors: overlay.sponsors,
              relativebox: overlay.relativebox,
              eventlogo: overlay.eventlogo,
            }}
            validationSchema={Yup.object({
              bezeichnung: Yup.string().required(
                "Bezeichnung ist erforderlich"
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                values.slug = values.bezeichnung
                  .replace(/\s+/g, "-")
                  .toLowerCase();
                const data = await axios
                  .put(
                    `https://strapi.peaklinems.de/overlays/${overlay.id}`,
                    values,
                    {
                      headers: {
                        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                      },
                    }
                  )
                  .then(function () {
                    setSaved(true);
                    setTimeout(() => {
                      setSaved(false);
                    }, 3000);
                  })
                  .catch(function () {
                    alert(
                      "Bezeichnung wird bereits genutzt. Bitte wähle eine andere Bezeichnung."
                    );
                  });
                data;
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <section className="grid justify-start w-full gap-10 mt-6">
                <section className="grid gap-2">
                  <label htmlFor="bezeichnung">Bezeichnung</label>
                  <Field
                    name="bezeichnung"
                    type="text"
                    className="w-64 px-3 py-2 text-black rounded w-"
                  />
                  <ErrorMessage name="bezeichnung" />
                </section>

                <section className="grid gap-3">
                  <div className="flex gap-2">
                    <Field name="relativebox" type="checkbox" />
                    <label htmlFor="relativebox" className="-mt-1">
                      Relative Box
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <Field name="teamlogo" type="checkbox" />
                    <label htmlFor="teamlogo" className="-mt-1">
                      Teamlogo
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <Field name="sponsors" type="checkbox" />
                    <label htmlFor="sponsors" className="-mt-1">
                      Sponsorsen
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <Field name="camera" type="checkbox" />
                    <label htmlFor="camera" className="-mt-1">
                      Kamera Box
                    </label>
                  </div>
                </section>

                <section className="hidden">
                  <Field name="userID" type="text" />
                  <Field name="slug" type="text" />
                  <Field name="type" type="text" />
                </section>

                <section className="flex gap-4">
                  <button
                    type="submit"
                    className="flex px-2 py-3 bg-green-600 rounded-md w-28 place-content-center"
                  >
                    {saved ? "Gespeichert" : "Go!"}
                  </button>

                  <button
                    type="button"
                    className="flex px-2 py-3 bg-red-600 rounded-md w-28 place-content-center"
                    onClick={() => {
                      if (
                        confirm("Willst du das Overlay wirklich löschen?") ===
                        true
                      ) {
                        handleDelete();
                      }
                    }}
                  >
                    Löschen
                  </button>
                </section>
              </section>
            </Form>
          </Formik>
        </section>

        {eventlogo ? (
          <section>
            <div>
              <Image
                alt="Event Logo"
                src={`https://strapi.peaklinems.de${eventlogo.url}`}
                height={eventlogo.height}
                width={eventlogo.width}
              />
            </div>
          </section>
        ) : (
          <FileUpload />
        )}
      </section>
    );
  } else {
    return (
      <div className="mt-6">
        Du bist nicht berechtigt dieses Overlay zu bearbeiten.
      </div>
    );
  }
}
