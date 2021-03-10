
export default {
  filters: {
    num (value) {
      return Intl.NumberFormat('pt-BR').format(value);
    }
  }
}
