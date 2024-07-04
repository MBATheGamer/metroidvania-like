const initStateManagment = () => {
  const state = {
    player: {
      HP: 3,
      maxHP: 3,
    },
    isDoubleJumpUnlocked: false,
    isInBossFight: false,
    isBossDefeated: false,
  };

  return {
    current: () => {
      return { ...state };
    },
    setToPlayer: (property: "HP" | "maxHP", value: number) => {
      state["player"][property] = value;
    },
    set: (
      property: "isDoubleJumpUnlocked" | "isInBossFight" | "isBossDefeated",
      value: boolean
    ) => {
      state[property] = value;
    },
  };
};

export const state = initStateManagment();
