<script>
import { calculateCashflow } from "@/util";
export default {
  data: () => ({
    startingSavings: "",
    savingPerYear: "",
    cashflowPerHouse: "",
    houseCount: "",
    numYears: "",
    cashDownPerHouse: "",
    yearsArr: [],
    yearsHeaders: [
      {
        text: "Annual Real Estate Cashflow",
        value: "annualRealEstateCashFlow",
        sortable: false
      },
      { text: "Cash", value: "currCash", sortable: false },
      { text: "Year", value: "currYear", sortable: false },
      { text: "House Count", value: "houseCount", sortable: false },
      { text: "Portfolio Value", value: "portfolioValue", sortable: false }
    ],
    rowsPerPageItems: [10, 20, 30, 40],
    pagination: {
      rowsPerPage: 20
    }
  }),
  methods: {
    calculate() {
      const newYearsArr = calculateCashflow(
        this.startingSavings,
        this.savingPerYear,
        this.cashflowPerHouse,
        this.houseCount,
        this.numYears,
        this.cashDownPerHouse
      );
      this.yearsArr = newYearsArr;
      console.log(this.yearsArr);
    }
  }
};
</script>
<template  width="80%">
  <div>
    <template v-if="yearsArr.length">
      <v-card raised>
        <v-data-table
          :items="yearsArr"
          class="elevation-1"
          :headers="yearsHeaders"
          :rows-per-page-items="rowsPerPageItems"
        >
          <template slot="items" slot-scope="props">
            <td>${{props.item.annualRealEstateCashFlow}}</td>
            <td>${{props.item.currCash}}</td>
            <td>{{props.item.currYear}}</td>
            <td>{{props.item.houseCount}}</td>
            <td>${{props.item.portfolioValue}}</td>
          </template>
        </v-data-table>
      </v-card>
    </template>
    <template>
      <v-form ref="form">
        <v-layout align-start justify-center row wrap>
          <v-flex>
            <v-text-field
              v-model="startingSavings"
              @keydown.enter="calculate"
              label="Starting Savings"
            />
            <v-text-field
              v-model="savingPerYear"
              @keydown.enter="calculate"
              label="Saving Per Year"
            />

            <v-text-field
              v-model="cashflowPerHouse"
              @keydown.enter="calculate"
              label="Cashflow Per House"
            />
            <v-text-field v-model="houseCount" @keydown.enter="calculate" label="House Count"/>
            <v-text-field v-model="numYears" @keydown.enter="calculate" label="Number of Years"/>
            <v-text-field
              v-model="cashDownPerHouse"
              @keydown.enter="calculate"
              label="Cash Down Per House"
            />
            <v-btn @click="calculate" color="primary">Calculate</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </template>
  </div>
</template>


<style scoped>
</style>