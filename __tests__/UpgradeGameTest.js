const MissionUtils = require("@woowacourse/mission-utils");
const UpgradeGame = require("../src/domain/UpgradeGame");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("업그레이드 게임 테스트", () => {
  test("레벨 가져오기 테스트", () => {
    mockRandoms([0, 0, 0]);

    const upgradeGame = new UpgradeGame();
    const zeroUpgrade = upgradeGame.getLevel();

    upgradeGame.upgrade();
    upgradeGame.upgrade();
    const twoUpgrade = upgradeGame.getLevel();

    expect(zeroUpgrade).toEqual(0);
    expect(twoUpgrade).toEqual(2);
  });
});
