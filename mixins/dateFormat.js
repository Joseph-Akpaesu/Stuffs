
import format from 'date-fns/format'

export default {
  /*data() {
      return {
          dateFormat: ''
      }
  },*/

  methods: {
    formatDate(dirtyDate) {
      let formattedDates = ''
      if(dirtyDate) {
        formattedDates = format(new Date(dirtyDate), this.dateFormat)
      }
      return formattedDates
    },
  }
}
