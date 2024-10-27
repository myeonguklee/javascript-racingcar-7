import { Console } from "@woowacourse/mission-utils";
import { validateCarCount, validateCarNameLength, validateDuplicate, validateEmpty } from "./utils/validator";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    // 입력값이 비어있는지 검사
    validateEmpty(carNames);
    // 쉼표로 분리하고 각 이름의 앞뒤 공백 제거
    const carList = carNames.split(",").map((name) => name.trim());
    // 자동차 유효성 검사(2대 이상, 자동차 이름 중복, 자동차 이름 길이)
    validateCarCount(carList);
    validateDuplicate(carList);
    carList.forEach((car) => {
      validateCarNameLength(car);
    });
  }
}

export default App;
