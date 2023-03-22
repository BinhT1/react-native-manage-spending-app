export const Utils = {
  // hàm thêm đấu chấm vào tiền hoặc điểm. Vd: 1000 => 1.000
  formatNumber: x => {
    return x
      .toString()
      .split(/(?=(?:\d{3})+(?:\.|$))/g)
      .join('.');
  },
};
