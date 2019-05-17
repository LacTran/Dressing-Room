import React from 'react';

const body = () => {
    const styles = {
        // .body
        bodyClass: {
            width: "250px",
            height: "500px",
            background: 'url("./images/allbody/bodynew.png")',
            position: "absolute",
            top: "12%",
            left: "22%",
            zIndex: "1"
        },
        bikiniTop: {
            width: "250px",
            height: "500px",
            background: 'url("./images/allbody/bikini_branew.png")',
            position: "absolute",
            top: "0%",
            left: "0%",
            zIndex: "1"
        },
        bikiniBottom: {
            width: "250px",
            height: "500px",
            background: 'url("./images/allbody/bikini_pantsnew.png")',
            position: "absolute",
            top: "0%",
            left: "0%",
            zIndex: "1"
        },
        feetrightClass: {
            width: "25px",
            height: "41px",
            background: 'url("./images/allbody/feet_high_rightnew.png")',
            position: "absolute",
            bottom: "4%",
            right: "17.5%",
            zIndex: "1"
        },
        feetleftClass: {
            width: "25px",
            height: "41px",
            background: 'url("./images/allbody/feet_high_leftnew.png")',
            position: "absolute",
            bottom: "4%",
            left: "33.8%",
            zIndex: "1"
        },
        model: {
            width: "60px",
            height: "77px",
            background: 'url("./images/model/1000new.png")',
            position: "absolute",
            top: "-8.5%",
            left: "43%",
            zIndex: "1"
        }
    }


    return (
        <div className="body" style={styles.bodyClass}>

            <div className="model" style={styles.model}></div>
            <div className="bikiniTop" style={styles.bikiniTop}></div>
            <div className="bikiniBottom" style={styles.bikiniBottom}></div>
            <div className="feet" style={styles.feetleftClass}>
            </div>
            <div className="feet" style={styles.feetrightClass}>
            </div>
        </div>
    );
};

export default body;