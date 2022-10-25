<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="IBSN" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.Isbn | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="名称" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.Name  }}
      </template>
    </el-table-column>
    <el-table-column label="馆内数量" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.Number  }}
      </template>
    </el-table-column>
    <el-table-column label="可借阅数量" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.AvailableNumber  }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { bookList } from '@/api/book'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      bookList().then(response => {
        this.list = response.data.data.payload.slice(0, 5)
      })
    }
  }
}
</script>
