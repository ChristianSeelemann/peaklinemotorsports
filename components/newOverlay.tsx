import React from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function NewOverlay({ session }: any) {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        bezeichnung: "",
        userID: session.name,
        slug: "",
        type: "overlay",
        camera: false,
        teamlogo: true,
        sponsors: true,
        relativebox: true,
      }}
      validationSchema={Yup.object({
        bezeichnung: Yup.string().required("Bezeichnung ist erforderlich"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          values.slug = values.bezeichnung.replace(/\s+/g, "-").toLowerCase();
          const data = await axios
            .post(`https://strapi.peaklinems.de/overlays`, values, {
              headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzNTk5MDUyLCJleHAiOjE2NDYxOTEwNTJ9.s7ql6-X_SmGBWObZxmcNYs0C4NnV4UGguyfdhO4VA18`,
              },
            })
            .then(function () {
              router.push("/streaming");
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

          <button
            type="submit"
            className="flex px-2 py-3 bg-green-600 rounded-md w-28 place-content-center"
          >
            Go!
          </button>
        </section>
      </Form>
    </Formik>
  );
}
