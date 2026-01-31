import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';

const EXCEL_FILE = 'Assignment I - IT22267818_TEST_CASE.xlsx';
const OUTPUT_FILE = 'tests/test_data.ts';

async function generateTestData() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(EXCEL_FILE);
    const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
        console.error('No worksheet found');
        return;
    }

    const testCases: any[] = [];

    // Iterate rows, assume header is row 1
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header

        const id = row.getCell(1).text;
        if (!id) return; // Skip empty rows

        const coverageText = row.getCell(9).text;
        const coverageLines = coverageText.split('\n').map(l => l.trim().replace(/^•\s*/, ''));

        const category = coverageLines[0] || '';
        const grammar = coverageLines[1] || '';
        const length = row.getCell(3).text;
        const quality = coverageLines[3] || '';

        testCases.push({
            id: id,
            description: row.getCell(2).text,
            length: length,
            input: row.getCell(4).text,
            expectedOutput: row.getCell(5).text,
            type: id.startsWith('Pos_Fun') ? 'Positive' : (id.startsWith('Neg_Fun') ? 'Negative' : 'UI'),
            category: category,
            grammarFocus: grammar,
            qualityFocus: quality
        });
    });

    const tsContent = `export interface TestCase {
  id: string;
  description: string;
  input: string;
  expectedOutput: string; // The "Expected Output" column in Excel
  type: 'Positive' | 'Negative' | 'UI';
  category: string; // "What is covered by the test" -> Input Type / Domain
  length: 'S' | 'M' | 'L'; // Input length type
  grammarFocus?: string;
  qualityFocus: string; // Using string to accommodate variations
}

export const testCases: TestCase[] = ${JSON.stringify(testCases, null, 2)};
`;

    fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');
    console.log(`✅ Generated ${OUTPUT_FILE} with ${testCases.length} test cases`);
    console.log(`   - Positive: ${testCases.filter(tc => tc.type === 'Positive').length}`);
    console.log(`   - Negative: ${testCases.filter(tc => tc.type === 'Negative').length}`);
    console.log(`   - UI: ${testCases.filter(tc => tc.type === 'UI').length}`);
}

generateTestData().catch(console.error);
