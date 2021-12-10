import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import ProductFilterBoolContainer from "./components/ProductFilterBool/ProductFilterBoolContainer";
import ProductFilterListContainer from "./components/ProductFilterList/ProductFilterListContainer";
import ProductFilterRangeContainer from "./components/ProductFilterRange/ProductFilterRangeContainer";
import ProductList from "./components/ProductList/ProductList";
import SubdivisionList from "./components/SubdivisionList/SubdivisionList";
import { FaRegWindowClose } from "react-icons/fa";
import ReactLoading from "react-loading";
import {
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
} from "./Actions/ProductsActions";

const ProductsContainer = ({
  products,
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
}) => {
  const { category } = useParams();
  useEffect(() => {
    fetchProductsData(category);
    fetchProductsfilter(category);
    fetchProductssubdivision(category);
  }, [
    category,
    fetchProductsData,
    fetchProductsfilter,
    fetchProductssubdivision,
  ]);
  const [open, setOpen] = useState(false);
  const initialState = {
    range: { min: 0, max: Infinity },
    list: [],
    availability: false,
    Discount: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "list":
        return { ...state, list: action.data };
      case "range":
        return {
          ...state,
          range: { min: action.data.min, max: action.data.max },
        };
      case "availability":
        return { ...state, availability: action.data };
      case "Discount":
        return { ...state, Discount: action.data };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterProducts = (products) => {
    const result = products.filter((item) => {
      const filterBrand =
        state.list.length !== 0 ? state.list.includes(item.Brand) : true;

      const available = state.availability ? item.availability === true : true;

      const discount = state.Discount ? item.Discount !== 0 : true;

      const range =
        item.price >= state.range.min && item.price <= state.range.max;

      return filterBrand && available && discount && range;
    });
    return result;
  };

  return (
    <div className="relative pt-32">
      <Header />
      {products.fetching ? (
        <div className="w-full min-h-84 flex justify-center items-center">
          <ReactLoading
            className="ReactLoading"
            type={"spinningBubbles"}
            color={"#4B566B"}
            height={"auto"}
            width={200}
          />
        </div>
      ) : (
        <div className="w-full text-right pr-5 sm:hidden ">
          <Button
            text="جستوجوی پیشرفته"
            background="blue"
            border={false}
            onclick={() => setOpen(true)}
          />
        </div>
      )}

      <div className=" w-11/12 2xl:min-w-1536 2xl:max-w-2xl mx-auto">
        {products.subdivision.length !== 0 && (
          <SubdivisionList subdivision={products.subdivision} />
        )}
        <div className="flex gap-2 justify-between items-start">
          <ProductList products={filterProducts(products.products)} />
          <div
            className={`flex flex-col gap-2 absolute w-full min-h-screen items-center top-0 pt-32 
           bg-Backgroundprimary sm:p-0 sm:sticky sm:top-28 sm:w-auto sm:items-start sm:min-h-0  sm:left-auto ${
             open ? "left-0" : "-left-full"
           }`}
          >
            <FaRegWindowClose
              className={`fixed top-32 text-5xl ${
                open ? "right-2" : "-left-full"
              } text-titeltext`}
              onClick={() => setOpen(false)}
            />
            {products.filters.map((filter, index) => {
              if (filter.type === "range") {
                return (
                  <ProductFilterRangeContainer
                    key={index}
                    min={filter.min}
                    max={filter.max}
                    dispatch={dispatch}
                  />
                );
              } else if (filter.type === "list") {
                return (
                  <ProductFilterListContainer
                    key={index}
                    list={filter.value}
                    dispatch={dispatch}
                  />
                );
              } else if (filter.type === "bool") {
                return (
                  <ProductFilterBoolContainer
                    key={index}
                    dispatch={dispatch}
                    type={filter.name}
                    text={filter.title}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        magnam officia recusandae ab dicta eveniet blanditiis ut minus ratione
        commodi, esse accusantium ea nulla eos sit temporibus modi inventore
        illo tempora, exercitationem officiis sapiente! Quaerat, amet totam,
        perspiciatis repudiandae debitis laborum minima deleniti eos in nemo
        quod nulla doloribus nam culpa? Natus consequatur eius, cumque cum atque
        facere ad placeat obcaecati expedita, libero veniam fuga vero architecto
        deleniti error unde porro, minus sint ab officiis amet culpa doloribus
        mollitia. Doloribus ex, voluptatem repellendus sapiente maiores sit
        nulla cum illum amet et ea officiis fugiat omnis architecto aliquam
        adipisci vero iure ut earum. Maiores voluptate sequi iste at quam
        voluptatibus obcaecati necessitatibus quo saepe doloremque culpa
        pariatur nesciunt ipsa odit neque, cumque dicta dolorum nobis officiis.
        Amet maxime aliquam, laborum dignissimos sint animi molestias totam!
        Illo veniam adipisci reprehenderit accusamus reiciendis quas dignissimos
        recusandae sed. Corrupti quidem, enim debitis voluptatibus vero
        consectetur corporis eos iusto obcaecati accusantium illo? Quaerat autem
        laudantium, molestias facilis tenetur praesentium! Placeat repudiandae
        facilis cum, unde vel velit minima laborum quod iusto quaerat at
        exercitationem reiciendis adipisci, dignissimos porro amet inventore
        ipsum id distinctio quo blanditiis impedit, nostrum quibusdam possimus?
        Magni sed doloremque eos et dolores aliquam numquam non ex expedita
        voluptate! Aperiam adipisci quidem incidunt perspiciatis, fuga
        repellendus quis animi eaque in exercitationem inventore corrupti eum
        cumque quas, necessitatibus fugiat suscipit, labore aliquam odio sint
        voluptas qui. Repellat ratione sed molestiae, aliquid aliquam voluptate
        laborum vero voluptatem deleniti mollitia ab libero labore consequuntur
        quas ipsam consequatur atque ipsum ducimus facilis quam quod. Sequi
        eveniet ullam doloremque. Alias voluptatum temporibus harum beatae,
        ipsam ut veritatis esse corporis modi in veniam magnam iusto reiciendis
        possimus deleniti. At maiores optio veritatis error tenetur distinctio
        quae iusto autem repellendus recusandae provident consequuntur
        consectetur laudantium neque praesentium obcaecati architecto hic, a
        cumque. Aut qui nulla mollitia quis quod quasi at deleniti numquam. Cum
        nemo veritatis tempora laborum accusamus perferendis ipsa dolor, minus
        illo possimus maxime necessitatibus distinctio maiores ducimus iste
        nobis assumenda! Unde, perferendis? Accusantium, sed. Culpa dolorem illo
        iusto deserunt quod, ipsam sed. Suscipit, animi quia! Tenetur
        praesentium facilis obcaecati sunt voluptatum recusandae, expedita
        distinctio provident fugiat, molestias ad officiis quae, accusantium
        doloribus voluptates deserunt sapiente at velit assumenda repudiandae
        corrupti dolor natus saepe a! Repudiandae nihil dolor dolores minima rem
        eum odit libero, nesciunt iusto recusandae ipsam amet quia molestias
        consectetur cumque voluptas itaque iste pariatur veniam laborum. Placeat
        fugit libero ad ullam reprehenderit pariatur expedita harum sequi
        tenetur alias! Excepturi eaque ipsum hic similique repudiandae
        cupiditate deleniti quam assumenda! Vel, nemo ex! Excepturi, eum
        placeat! Sequi corporis animi labore cum. Debitis alias ullam tempore
        corporis modi adipisci praesentium repellat voluptas officia ab corrupti
        ipsam, reiciendis, expedita temporibus excepturi dolores dicta
        perspiciatis iure ad. Nemo eum corrupti mollitia reiciendis nisi
        assumenda, neque rem incidunt eius tenetur perspiciatis accusamus
        doloribus ea vel alias quasi at vitae ex facilis adipisci voluptates
        possimus unde expedita autem? Dolorem, quasi illo minus ipsa
        voluptatibus ex fuga, laudantium quos eaque, eum consequuntur et odit
        corporis corrupti esse placeat recusandae minima. Esse voluptatibus
        delectus vero labore. Eum, soluta itaque, voluptas voluptate aliquid,
        culpa possimus inventore sunt fugiat neque ut aspernatur laudantium!
        Repellat saepe aliquam veniam consequatur, ducimus eos impedit qui
        possimus. Maiores porro assumenda aut provident itaque eos reiciendis
        mollitia recusandae eligendi ab nulla fugit deserunt harum, voluptate ea
        possimus incidunt, veniam necessitatibus alias nostrum sapiente enim,
        vero amet totam. Delectus ullam repellendus voluptatibus iste architecto
        quibusdam fuga at? Debitis, odio eaque? Dolores maxime consequatur
        aspernatur ad dolor praesentium minima saepe, eum atque repellat!
        Laborum provident minima quas nisi qui eum odit illum reiciendis
        aspernatur alias non velit nam similique sed officia error repudiandae
        at dicta, aliquam ipsum ducimus labore blanditiis perspiciatis
        doloribus. Odit, suscipit nulla! Adipisci nesciunt sed eum, aperiam
        praesentium amet cupiditate perferendis, alias eligendi voluptatum
        itaque minus eius veritatis delectus! Error consequuntur placeat
        quisquam expedita reiciendis, similique aperiam possimus ex, autem vero
        corrupti eum cupiditate aspernatur, et nulla totam accusamus magnam
        minima sit repellendus quasi adipisci facere. Vero ullam nam laudantium
        quo quos tempore repellat nobis! Et, illo corporis quibusdam dignissimos
        esse velit eius aperiam necessitatibus autem earum! Optio dicta
        voluptatem maiores a, id itaque quod dolorum obcaecati, sunt ratione
        minima pariatur. Eaque officia, reiciendis pariatur praesentium itaque
        quo repellendus voluptatibus. Ipsum eius nulla veritatis possimus!
        Eligendi illo magni, nemo minima beatae quam ipsa deleniti veritatis
        facere quibusdam sit ducimus at dolore, culpa corporis. Ipsum distinctio
        veritatis cumque commodi odio nesciunt omnis, unde repellat natus
        consectetur repudiandae. Ad nesciunt tempore earum possimus tempora
        perspiciatis molestiae quod recusandae, voluptates, incidunt, rerum
        delectus tenetur. Dolorem reiciendis magnam eveniet aliquam molestias
        quos labore nemo saepe necessitatibus? Incidunt quas iure odit delectus,
        tempora non assumenda officia cum dicta ex quisquam asperiores in vero
        ad similique suscipit quia et, necessitatibus enim possimus nesciunt
        ratione veritatis aliquam ducimus. Consequatur architecto quisquam unde
        optio tenetur eaque tempora sed repudiandae totam aliquid explicabo in
        quod dolorum, reiciendis perferendis dolorem voluptates velit.
        Perspiciatis repellendus minus, qui accusamus quis error reiciendis amet
        voluptate minima numquam sit provident quas nulla laboriosam ut quo est
        cupiditate quibusdam maiores esse quisquam earum corrupti porro?
        Excepturi repellendus rerum quae veniam necessitatibus ullam deleniti
        eius dicta suscipit, dolorum nam numquam molestiae? Eaque, ad in
        cupiditate dolorum magni, expedita nihil, commodi ab repudiandae nam
        impedit. Sint culpa quo laudantium omnis nam consequatur voluptas odit
        pariatur, fugit iusto tempora natus quas amet repellendus accusantium
        cumque maiores veritatis, facere sapiente repudiandae veniam, ut
        molestias! Cumque obcaecati tempore natus, excepturi doloribus
        cupiditate. Reiciendis rerum asperiores qui delectus consectetur
        repellendus odio corporis, quasi corrupti eaque mollitia voluptatum
        autem numquam consequatur iure unde earum, quis dolores quidem aliquam
        omnis sequi officiis similique eveniet! Nostrum sequi itaque iste odio
        molestias voluptatum at? Sed reprehenderit delectus asperiores veniam
        quaerat doloribus modi voluptates ea corporis illum! Accusamus optio
        doloremque magnam molestiae. Mollitia, aliquid. Enim soluta vitae, omnis
        excepturi id accusantium porro sed in eligendi perspiciatis consequuntur
        ullam quaerat non expedita nobis magnam quis reiciendis ad vero saepe.
        Nihil, soluta architecto. Porro quaerat officia doloribus eius ratione
        nisi.
      </p>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = {
  fetchProductsData,
  fetchProductsfilter,
  fetchProductssubdivision,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
