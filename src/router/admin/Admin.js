import React from "react";
import "./Admin.css";
import { NavLink, Routes, Route } from "react-router-dom";
import CreateProduct from "./create-product/CreateProduct";
import ManageProduct from "./manage-product/ManageProduct";

function Admin() {
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <h1>Admin Panel</h1>
        <NavLink to={"/"}>
          <img className="asaxiyy__logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8Ajf9/xv8Ai/8Aif8Ah//p8P/5/f8Ajv8Ahf99xf8Akf/x+f/8/f8Akv/5/v/p9f/h8f/v9//f8P/T6v/1+v/L5v+w2f/P6f/A3v+m1v/I5f90wv8Alv/p8/+UzP+GxP99vv9Wrv9ApP8qnf+Tzv/I4P+q0f9lrf+Pw/9ls/94uf8qm/+g0f89o/+Fvv9isf+b0v+92v+cy/9Qq/8+mv9uu/9apf9xr/+lzf94tv8hoP+03f9Oof9Vsv82p/80luFyAAANJ0lEQVR4nO1dCXPiPA9+g51NIBwhBMIVCEfL2UI52t1Cy///V1+gJTYhsThyMZ+fmZ3Z7brBimw9kiyZ//7j4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OD4/0D2DxutXNwzvBcWRiykm1LcM7wTxS8ssIAqcc/wXiwRU0Bx9ugqVFdsFSrPcc/wXtTYKsRDNe4Z3gltzFahPIh7hvdCzzMFRB+PrsJch71I5VTcM7wXkArXLWeoWoxxnrcjA9iZpuPP5NrLOCd6K7QvtoRC1Rma3exajCclFRZbPjwpO0ONtFyLcaY3AmR74rBlewittBjnehtqCluFXbIut/mTNfsgUOdsFQqE7cvD/YZ9j3GyN+EZUOEHWZVbcy+hrMc42xsgdQAVWmTs7DAUdeKa620A2b7kDK3kD6yCPh6L9ZtsLkRNZ6Q0Sv/+7KFYX1qz16hCLGdr8/sycO+RlNhmC4i6DtsXXpwN+0isr34Ai5SwvdZ3huJxNsY5X4c6xPYkMNzK1M8fJqmhAWyPKbZfUdpG74+SPa3lmYuUNimGQg/NlxhPTRCkjshUIWqTsZOTd/EorK/LfrL9iDElVFExTyX8eojMTc4C8twTZ2hhlj79P/khWL88Ze5ClG84Q0uvrpeBHyL9tmRqUEArkskfnGlbWcQ48wuhfrEllAnbt17PtP0IrA+wPdoREbYeJin5rF/+C7G9s0illcf/i1bSj6MMwGF7JWxf8xxhJpz1pRmb7cV/ZOy79zvoJNt109kOG5oSqtDXnkNRP9F5Rchhw4Ttf9Mz55Db/s+PH5rJVqFJs73P0GS7bucUfooVyeTXfQcpRowSAFDZDpsg1J2hLf+kP54UYpSBjToQVeyIChlH/Ci5CRtpCBSXvDhEIH0zhoqdpLpuBjsNLCh/nKFV1oZF04SyfmHCtjMiSc/kxuw8RzuZrlsFogpy9pIDzoeniSQMaQSw/SfZXblv5lBBfolREF+UNoAKaQvZSLPG2qyfRFtTB/Lcf8vU4HIXqLWp+35ObGgBbO9aeEDJGxrHJAYD/l7YD1zrrti7Yk0nAytAKU+u8QP2C0lPkkYYBtthE2T34aDuF1v8vpF+ws71C2wKF7B1Frl/AuSyTJYSq4CdMc81UvGO8R0lThN1JFwYAQ7b2CM18Q7s3ESFiXofCAy9Utle6VIar0li/QGwp+ZefmYZMr8JUmILKrT0Ti4B9jdJrP8CKMMnt9Rie7IClbeKGTlguQkZn1+EFvdnUgijAbG9H3lD4Ug/ISWZhTlbQDz3y9OfnQG7RUzIkXCDHdsLeX//C3AUUD8ZCRu/9PxRhd8026uNhk4FihPA2UsEYVQBtkcU22tGKpPJPDWcZQscxtEZ1vjwwpzjSUG31s6kbGSataOI0gfg7iUgTGz1gEVKnRjWDwLaaDpbE3DdUDf+00QD4LQ1sTN66ojM05HptA3z14V17F2m5S5QH0QKuQr1JhHxyHS5F+D3P+ORi0AHJmgS0i4+ZYiETi4NcN3oGrFYAGUF6fqgGlFhKpM6Mp1T5+33hJhZv2oypyfkiS1UKRXatsY4mpBnhX2G8Rov6wPtW4g69K3SAtq25hhvFACPQYy1lxaK7dNUNfCJCm0lOqHRlu314W6cxRlLxDYTG5JNqjZTLhwnngUOVlGMrK+ugPogaoG9uQVsOkYSKoXrxue6DQAzOCVs33ILaO/Eo63RXpmPibEQTAPYHs9IUUU9cy6iI38bKAyPrXMPKOgWqNOVVttDQsL60OlxTKwPHMYLaEj2T+NcwFSqfbRDElAaLlhxyLdvq2NPS9k6Q9UnLwmbTnwLNPPFxfrAlQlCjwQ+51RxWKbtI+tLUJ7gn/cUwkWJfbIi4CdSH+RhZw5KdEKjGtv7ozulooMF2RkS25c8VbgnjOPRhAbE+nEUgkH99tTCyvmokGb9Aft9Ya/Dq5ABnFIjKoeY9ZFvTxjH4CoLtCwyUpIhQQVu18ETquvAT4W2Eh0jCUQpQuSdexV2VCeYpG9C82B7R4lvx4mrQF456n79MpCPx3+JChu+8u3hGMkUQD5WtBJWoMMYUh+UffNXoa1Exy3Q2U9Er9ESBnC7jvBBVFhlCUixfnkC+N+RJmxUgO0FUh+UM3zI8CiiE+s3gObaVZRKzACLNE9i+/PA0CXh29E/h65DUSJkfYi8kOUMzW3ZKqRdN4Bio2R9wAFBVE+2P9s7EtYdJUKn5ZERhjq8nO09A0MXnCWdYguIImv6qkGBIdkw2RQsYaZ+nHiLbWsEJaIwUQJKvOj6oAqswRTJK4KXvvgVdQSMCrBb6Gpg36jiBI5qgFhf+IrE1uSgF011nBcvWKTUUZvN+kDCJpLOPQ3YLIJFxuqweHsQG1kBWD+Sfv02ICAdyZUuk5BMWwVSsPkI+vVVdvXy6cVrBabXfVykb1RxF1gIFv5OBA4ZXCn4KtmImSPcAqbo3wCSI/SdEyEhC7H998kxSq6Wah5ACZb5/cnPv5qZxgmPLwX2Tgy9X38LHPoKbve4VDOMbaNS1fXSD3S90tga9beng6iZJ5crpgMV42GzfgHqt/fwjiWPty6VNbVY0it66Ww8kLARz6v+AwVw6E5fAXUrdPYqQf1QTxMli6VChHHv/jUENn25u28CBaNZG2O5P7SCOAaDEjah9usvfQwpxni1rDeCaR/IfgOsH2JJpuapQoTRbrQIsMNlcXkzatDw6LdHSDbfdTXQ3Q+xfnjHNOWz9AwSzPm2dQkH52hAg6HOvVFYrO/qt0dYXlkVYLoFrfWnpD/btF9/OaBuGLVnmwf/tDTfeQKFSMijTywQuMqzxPxwybBqBbVoey+L5fvOtNeVosjyrzsmy/bfkTzdvS8XFdvTUT121Qy4nCGkfv2TfnuszJ795VMbg9F4Z+ZxOo39Jovs/xQVc9OdLBcN9fSyjyr7hteQbumhyiSRkO88+xmX4nY5G/axLRoQZv3KaUsq9Iez0Qu19KT5xZekBIiiU+qKbOvpKV8uq799ftmrUrxEuFM5BfmdWhPAyQ8K5dKFY4kXUua61zaQykVrupbRRarzmrVJlXTH0a/f6h8ejeVPzxhUq1i7m4X7gUiTgAGUzM2Dv6XnENsjoTvweLRUWYyF+8TbgyaBlvvSSJeEwbtuhw48bHrxQ7Y22yAgC3gRcJsi14GvET5AnAWtRENBCHdK54/NtlfmtYbFD2vKfulQDX/QrD/GqGecGdBcqd2T2S/7KryRR4Pl3wG7bpW8MjlboIVWO8/OG10JuvDdZn1AiYEmbKTJ1Dh7ZcV/m/utyynypJzxvxzA+sG2euvtsxdWXL6mA5Zv/z1llJPqfTcmkbAfJOtrbu84W18FYj7dsz65tAXq1w/zlh59qIQgn7AP/ShrbQBrZBiafMUOUKF1B6hrhsFri+hdGySyi16A/OCG2L5cifhvKGGi3gnagJ4ATalv74L69adhtF8a0OHavaDv6pGgfv3gEzat95AsDDXrPmW3K0C//ibgY5pcZR2oC+MNutChAPTrB3zBS3kEneAHAtSjmNwAbl7eBJmwKU1CNTEE9C27BYD1xQCVWOuxd31wOLm0BercWwUm4NIM28SQWdO3SoGsH1CGX7PkaFboAWmq8g+6XhrNAyGMEtClFjBOsvZFIMMfSL++votshf5Ou0Mi4TLz2HnP+vcLWIMuYwOmK4oYISymRfz7zzQ+/ED0d29N6jQSurz37oRNwbjZxiCE0qK5++6MloPBYrF4PsD+y2LwbznqjHdTlMaeWUiqjBos/0jfWRxReAGqL3yEs/+Ym5VVK7XUbFkquHN0hYJUzqqtP8/t79ep/Qmuz0BrSonAJdonHsL1kKz81Rq0g//8+iNVaWll2M7ZgrZK9fnalE9zBlSZpQSUYYnGHRU25fa1GkQYT/9a9RJ80Esjp27bn18K2ZiY6iEOs1+/bF3paWNxOh/dWltX/Dfpycc9R/vfap/9qcrNtkaCOn1d7xLLq0H1HldYKtVm0x/LI86pBy2BCKN7I+uXZ9doEGGz/Xx/uJbVje7heXkqflfZfIXN22J9yboiHYPQq1UKJuDOabVvc39IQnYXs9gMoV79tgKb7GQtXGhHsbI2rjMtbOTUyRrRZZa677tGynpx+0fry69LZER49RL4obNuTemEjc8XKGNhWL/vo0vLFbhUxR6r6OR2VNsUCXi26WA0H9wf4xcHO+bpIFJGYRXtStTi82i1wsJqEcyrVZ/7vjbV3uV6NN1WLta3/bzuXcR0Cs3oKp6L1SaIqFoCVfqqYoTMcSPYUmFpsMqfGWxbgRF+lZ/lSIhwf9wIfuWUDfdxE5JnUTbmauujfNNZSBfyaLUJ7f7jqRHpF0/9NpSJm0GId0Vqi28nQYtfo76KWt/vi0075E7ZbKWrHDxjtIr8Jg6b9c0X/5rUwFBujPPY9mJi+OIC/S2qfb+dfPUSctF2aNCTcQk1BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB0ek+B+yPfz25DM+vQAAAABJRU5ErkJggg=="
            alt=""
          />
        </NavLink>
        <ul className="admin__coll">
          <li className="admin__item">
            <NavLink to={"create-product"}>Create Product</NavLink>
          </li>
          <li className="admin__item">
            <NavLink to={"manage-product"}>Manage Product</NavLink>
          </li>
        </ul>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/manage-product" element={<ManageProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
