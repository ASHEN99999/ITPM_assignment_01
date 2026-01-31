import * as ExcelJS from 'exceljs';
import * as path from 'path';

const EXCEL_FILE = 'Assignment I - IT22267818 New(1).xlsx';

async function extractData() {
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

        // Map columns based on standard template assumption or dump to see
        // Usually:
        // A (1): ID
        // B (2): Description
        // C (3): Length
        // D (4): Input
        // E (5): Expected
        // F (6): Actual (Should be empty in new file or ignored)
        // G (7): Status
        // H (8): Comment
        // I (9): Category (Coverage)

        const id = row.getCell(1).text;
        if (!id) return; // Skip empty rows

        // Parse Category (Column 9) which might be multi-line
        // "Input Type / Domain"
        // "Sentence / Grammar Focus"
        // "Input Length Type"
        // "Quality Focus"
        const coverageText = row.getCell(9).text;
        const coverageLines = coverageText.split('\n').map(l => l.trim().replace(/^•\s*/, ''));

        // Attempt to extract fields safely
        const category = coverageLines[0] || '';
        const grammar = coverageLines[1] || '';
        // length is usually coverageLines[2] OR separate column C
        const length = row.getCell(3).text;
        const quality = coverageLines[3] || '';

        testCases.push({
            id: id,
            description: row.getCell(2).text,
            length: length,
            input: row.getCell(4).text, // Column D
            expectedOutput: row.getCell(5).text, // Column E
            type: id.startsWith('Pos_Fun') ? 'Positive' : (id.startsWith('Neg_Fun') ? 'Negative' : 'UI'),
            category: category,
            grammarFocus: grammar,
            qualityFocus: quality
        });
    });

    console.log(JSON.stringify(testCases, null, 2));
}

extractData().catch(console.error);
