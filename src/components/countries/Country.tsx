import { ImgWrapper, Container, Img } from "./country.elements";
import { getSpecificNewsByCountry } from "../../store/action-creators";
import { useDispatch } from "react-redux";
import { ActionType } from "../../store/action-types";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Countries = { countryUrlImg: string; ISO: string }[];

const countries: Countries = [
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    ISO: "us",
  },
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
    ISO: "ae",
  },
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Mexico_%281916-1934%29.svg",
    ISO: "mx",
  },
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
    ISO: "fr",
  },
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    ISO: "ru",
  },
  {
    countryUrlImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png",
    ISO: "eg",
  },
];
const Country: React.FC = () => {
  const dispatch = useDispatch();
  const currentCountry = useTypedSelector(
    (state) => state.newsData.currentCountry
  );

  function onClick(term: string) {
    dispatch({ type: ActionType.GET_SPECIFIC_COUNTRY_SUCCESS, payload: term });
    dispatch(getSpecificNewsByCountry(term));
  }

  return (
    <Container>
      {countries.map((country) => (
        <ImgWrapper key={country.ISO}>
          <Img
            country={currentCountry}
            ISO={country.ISO}
            src={country.countryUrlImg}
            onClick={() => onClick(country.ISO)}
          />
        </ImgWrapper>
      ))}
    </Container>
  );
};

export default Country;
