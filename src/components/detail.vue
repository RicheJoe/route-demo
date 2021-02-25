<template>
  <div>detail <button @click="savaPdf">生成pdf1</button> <button @click="savaPdf2">生成pdf2</button></div>
</template>

<script>
import { jsPDF } from 'jspdf';
export default {
  methods: {
    savaPdf() {
      //默认A4  竖版
      const doc = new jsPDF();

      doc.text('Hello world!', 10, 10);
      doc.save('a4.pdf');
    },
    savaPdf2() {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2],
      });

      doc.text('Hello world!', 1, 1);
      doc.save('two-by-four.pdf');
    },
  },
};
</script>

<style></style>
