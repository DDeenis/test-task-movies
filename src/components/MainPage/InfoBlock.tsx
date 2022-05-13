import React from "react";

export const InfoBlock = () => {
  return (
    <div className="bg-white p-10 text-center">
      <img
        src="https://vox.publika.md/wp-content/uploads/2016/02/starij_televizor.png"
        alt="tv"
        className="w-36 mx-auto mb-6"
      />
      <p className="text-base">
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </p>
    </div>
  );
};
