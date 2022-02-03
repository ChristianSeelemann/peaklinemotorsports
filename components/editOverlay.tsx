import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import { driversProps } from "../types/types";

export default function EditOverlay({ session, overlay, drivers }: any) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [showEventlogo, setShowEventlogo] = useState(overlay.eventlogo);
  const [eventLogoId, setEventLogoId] = useState(
    overlay.eventlogo ? overlay.eventlogo.id : null
  );
  const [eventlogoUrl, setEventlogoUrl] = useState(
    overlay.eventlogo ? overlay.eventlogo.url : null
  );
  const [eventlogoHeight, setEventlogoHeight] = useState(
    overlay.eventlogo ? overlay.eventlogo.height : null
  );
  const [eventlogoWidth, setEventlogoWidth] = useState(
    overlay.eventlogo ? overlay.eventlogo.width : null
  );

  const defaultDrivers = overlay.drivers.map((driver: driversProps) => {
    return {
      value: driver.id,
      label: driver.name,
    };
  });

  const options = drivers.map((driver: driversProps) => {
    return { value: driver.id, label: driver.name };
  });

  function handleDelete() {
    axios
      .delete(`https://strapi.peaklinems.de/overlays/${overlay.id}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      })
      .then(function () {
        router.push("/streaming");
      })
      .catch(function () {
        alert("Löschen fehlgeschlagen.");
      });
  }

  function handleLogoDelete() {
    setShowEventlogo(false);
    axios
      .delete(`https://strapi.peaklinems.de/upload/files/${eventLogoId}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      })
      .then(function () {
        setEventLogoId(null);
      });
  }

  if (session.name === overlay.userID) {
    return (
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
            private: overlay.private,
            drivers: overlay.drivers.map((driver: driversProps) => {
              return driver.id;
            }),
          }}
          validationSchema={Yup.object({
            bezeichnung: Yup.string().required("Bezeichnung ist erforderlich"),
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
                      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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
          {(props) => {
            return (
              <section className="flex flex-col-reverse justify-between w-full gap-4 lg:flex-row">
                <section>
                  <Form>
                    <section className="grid justify-start w-full gap-10 mt-6">
                      <section className="grid gap-2">
                        <label htmlFor="bezeichnung">Bezeichnung</label>
                        <Field
                          name="bezeichnung"
                          type="text"
                          className="w-64 px-3 py-2 text-black rounded"
                        />
                        <ErrorMessage name="bezeichnung" />
                      </section>

                      <section>
                        <div className="flex gap-2">
                          <Field name="private" type="checkbox" />
                          <label htmlFor="private" className="-mt-1">
                            Privates Overlay?
                          </label>
                        </div>
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

                      <section>
                        <div className="mb-2">Wer fährt mit?</div>
                        <div>
                          <Select
                            options={options}
                            className="text-black"
                            isMulti
                            defaultValue={defaultDrivers}
                            onChange={(event) => {
                              let selectedDrivers: any[] = [];
                              if (event.length > 0) {
                                event.map((driver: any) => {
                                  selectedDrivers.push(driver.value);
                                  props.setFieldValue(
                                    "drivers",
                                    selectedDrivers
                                  );
                                });
                              } else {
                                props.setFieldValue("drivers", []);
                              }
                            }}
                          />
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
                          className="flex w-24 px-2 py-3 bg-green-600 rounded-md place-content-center"
                        >
                          {saved ? "Gespeichert" : "Go!"}
                        </button>

                        <button
                          type="button"
                          className="flex w-40 px-2 py-3 bg-red-600 rounded-md place-content-center"
                          onClick={() => {
                            if (
                              confirm(
                                "Willst du das Overlay wirklich löschen?"
                              ) === true
                            ) {
                              handleDelete();
                            }
                          }}
                        >
                          Overlay Löschen
                        </button>
                      </section>
                    </section>
                  </Form>
                </section>

                {showEventlogo && eventLogoId ? (
                  <section className="w-full mt-1 lg:w-80">
                    <div>
                      <Image
                        alt="Event Logo"
                        src={`https://strapi.peaklinems.de${eventlogoUrl}`}
                        height={eventlogoHeight}
                        width={eventlogoWidth}
                      />
                    </div>
                    <div
                      onClick={() => {
                        handleLogoDelete();
                        props.setFieldValue("eventlogo", null);
                      }}
                      className="px-3 py-2 mt-4 text-center bg-red-600 rounded-md"
                    >
                      Logo Löschen
                    </div>
                  </section>
                ) : (
                  <section className="w-full mt-8 mr-8 lg:mt-6 lg:w-80">
                    <div className="mb-2">Eventlogo</div>
                    <form
                      onSubmit={(event: any) => {
                        event.preventDefault();
                        const request = new XMLHttpRequest();
                        request.onreadystatechange = function () {
                          if (request.readyState === XMLHttpRequest.DONE) {
                            const data = JSON.parse(request.responseText);
                            props.setFieldValue("eventlogo", data[0].id);
                            setEventlogoUrl(data[0].url);
                            setEventlogoHeight(data[0].height);
                            setEventlogoWidth(data[0].width);
                            setEventLogoId(data[0].id);
                            setShowEventlogo(true);
                          }
                        };
                        request.open(
                          "POST",
                          `https://strapi.peaklinems.de/upload`
                        );
                        request.setRequestHeader(
                          "Authorization",
                          `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
                        );
                        request.send(new FormData(event.target));
                      }}
                    >
                      <input
                        type="file"
                        name="files"
                        className="rounded-lg bg-violet-600/70"
                      />
                      <div className="mt-3 lg:mt-0">
                        <input
                          type="submit"
                          value="Upload!"
                          className="px-3 py-2 mt-3 bg-green-600 rounded-md"
                        />
                      </div>
                    </form>
                  </section>
                )}
              </section>
            );
          }}
        </Formik>
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
