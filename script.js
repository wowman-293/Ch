
function calculateDiagnosis() {
    let patientName = document.getElementById("patientName").value.trim();
    let motherName = document.getElementById("motherName").value.trim();
    let dayValue = parseInt(document.getElementById("daySelect").value);
    let timeValue = document.querySelector('input[name="time"]:checked').value;

    if (patientName === "" || motherName === "") {
        alert("براہ کرم مریض اور والدہ کا نام درج کریں!");
        return;
    }

    let totalValue = 0;

    // Assigning numeric values based on the given table (قمری اعداد)
    let numValues = {
        "ا": 1, "ب": 2, "پ": 2, "ج": 3, "چ": 3, "د": 4, "ھ": 5, "ہ": 5, "ۃ": 5, "ء": 1,
        "و": 6, "ز": 7, "ح": 8, "ط": 9, "ی": 10, "ک": 20, "گ": 20, "ل": 30, "م": 40,
        "ن": 50, "س": 60, "ع": 70, "ف": 80, "ص": 90, "ق": 100, "ر": 200, "ش": 300,
        "ت": 400, "ث": 500, "خ": 600, "ذ": 700, "ض": 800, "ظ": 900, "غ": 1000
    };

    function calculateNameValue(name) {
        let value = 0;
        for (let char of name) {
            if (numValues[char]) {
                value += numValues[char];
            }
        }
        return value;
    }

    totalValue += calculateNameValue(patientName);
    totalValue += calculateNameValue(motherName);
    totalValue += dayValue;
    totalValue += parseInt(timeValue);
    totalValue += 1100;

    let remainder = totalValue % 25;

    let diagnosis = [
        "جادو کا اثر موجود ہے۔", "معاشی مسائل ہیں۔", "جنات کی موجودگی ہے۔", "بندش کی علامات ہیں۔",
        "روحانی علاج کی ضرورت ہے۔", "سخت جادو کیا گیا ہے، جس سے جسمانی کمزوری محسوس ہوتی ہے۔",
        "تعویذات دفن کیے گئے ہیں، روحانی علاج کریں۔", "جنات کی مدد سے کالا جادو کیا گیا ہے۔",
        "محبت کے معاملے میں جادو کیا گیا ہے۔", "نفسیاتی مسائل ہیں، ماہر نفسیات سے رجوع کریں۔",
        "گھر میں آسیبی اثرات ہیں، تحفظ ضروری ہے۔", "نظر بد کے اثرات موجود ہیں، دم کروائیں۔",
        "جادوگر بار بار عمل کر رہا ہے، حفاظت کریں۔", "پڑھائی کے ذریعے بندش لگائی گئی ہے۔",
        "خود غرضی اور وسوسوں کی علامات ہیں۔", "کوئی روحانی یا جسمانی مرض نہیں، بس کچھ وہم ہے۔",
        "بندش کی وجہ سے کاموں میں رکاوٹ آ رہی ہے۔", "جن عاشق کے اثرات ہیں، احتیاط کریں۔",
        "سحر ہواتف کے اثرات، خوابوں میں پریشانی رہتی ہے۔", "سحر جنون کے اثرات، چیزیں بھول جاتی ہیں۔",
        "نفسیاتی بیماری کی علامات ہیں، ڈاکٹر سے مشورہ کریں۔", "جناتی نظر بد ہے، دم کروائیں۔",
        "سحر محبت کے اثرات ہیں، بے چینی محسوس ہوتی ہے۔", "جنات مسلط کیے گئے ہیں، روحانی علاج کریں۔",
        "گھر میں آسیبی اثرات موجود ہیں، حفاظت ضروری ہے۔"
    ];

    document.getElementById("resultText").innerText = diagnosis[remainder];
}
