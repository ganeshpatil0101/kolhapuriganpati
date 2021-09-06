import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotificationDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() => {
        const showDialog = localStorage.getItem('showDialog')
        if(showDialog === null) {
            localStorage.setItem('showDialog', true);
            setOpen(true);
        }
    }, 2000);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div>नमस्ते कोल्हापूरकर...🙏</div>
          <div>सर्वाना सप्रेम नमस्कार.</div>
          <div>भावा नो..</div>
            आपले कोल्हापूर हे जगात भारी आहे. इथले सगळेच भारी असते. आमचा गणपती उत्सव म्हणजे आमचा जीव की प्राण...
            या उत्सवात कोणतीही तडजोड आपण करीत नाही ही प्रत्येकाची भावना असते. कोल्हापूरच्या कलानगरीतील गणपती उत्सव हा नेहमीच कलासंपन्न आणि नेहमीच हटके असतो.
            म्हणूनच आज ही आपल्या कोल्हापुरात गणपती उत्सवाला शतकाची परंपरा आहे. दरवर्षी अगदी तीच मूर्ती आमची असते असे अभिमानाने सांगणारे असतात
            अशी परंपरा असणारे तसेच दरवर्षी अभिनव मूर्ती ही परंपरा सुद्धा इथलीच. म्हणूनच तुमच्या मंडळाच्या आणि गणपती मूर्तीच्या सुंदर भावना आम्ही पोहचवत आहोत
            अगदी जगभरात. ते ही यावर्षी पासून. तुम्ही फक्त एवढेच करायचे आहे. तुमच्या मंडळातील तुमच्या संग्रहात असलेली गणपतीची फोटो प्रतिमा आमच्या
            कडे पाठवायची आहे. आणि आम्ही त्या प्रसिध्द करू संपूर्ण जगभरात...
            आपल्या मंडळाचा गणपती फोटो http://kopganeshmurti.in/ वेबसाईट ला प्रकाशीत करण्यासाठी खालीलप्रमाणे मंडळ रजिस्टर करा. 
            <div>१. मंडळ नाव :- </div>
            <div>२. रजिस्टर नंबर :-  (optional)</div>
            <div>३. मोबाईल नंबर (कोणताही एक ) :- </div>
            <div>४. मंडळाविषयी थोडी माहिती : - (optional)</div>
            <div>गणपती फोटो पाठविण्यासाठी नियम खालील प्रमाणे </div>
            <div>१. फोटो clear असावा (शक्यतो दिवसा काढलेला)</div>
            <div>२. फोटो ई-मेल केला तरी चालेल (म्हणजे फोटो ची quality खराब होणार नाही )</div>
            <div>३. फोटो कोणत्या वर्षाचा आहे ते वर्ष :- (वर्ष नसेल तर फोटो अपलोड होणार नाही )</div>
            <div>४. फोटो बद्दल थोडी माहिती :- (optional)</div>
            (Note : कृपया मंडळातील एकाच सदस्याने फोटो पाठवावे, म्हणजे फोटो डुप्लिकेट होणार नाहीत, मागील वर्षाचे सगळे फोटो स्वीकारली जातील.)
            ह्या सगळ्या डिटेल्स खालील मोबाइल वरती व्हाट्सअँप, ई-मेल करा.
            <div>9325137778/9975943464</div>
            <div>kolhapuriganapti@gmail.com</div>
          </DialogContentText>
        </DialogContent>
        {<DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>}
      </Dialog>
    </div>
  );
}