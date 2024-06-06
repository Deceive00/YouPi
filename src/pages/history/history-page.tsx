import MainLayout from "src/layout/main-layout";
import OrderCard from "./finished-order-card";
import pickUpPng from "@assets/images/pick-up.jpg"
import deliveryPng from "@assets/images/delivery.jpg"

const HistoryPage = () => {
  // Fetch from firebase 'orders'

  // Use Effect 

  // Set Image berdasarkan Jenis Category Transaksinya, ambil dari static image krn cuman 2 gambar aja
    // Pick Up (Merah) = 
    // Delivery (Orange) = 

  // Reorder Handler

  // View Detail Handler

  // Calculate Total Price for each Transaction

  return (
    <MainLayout className={`lg:py-16 pt-20 pb-8 overflow-x-hidden`}>
      <div className={`w-screen h-max font-nunito box-border mx-auto flex justify-center`}>
        <div className={`grid lg:grid-cols-3 gap-12`}>
        <OrderCard
            imageUrl={deliveryPng}
            title="Shoes"
            campusName="Binus Alam Sutera"
          />

          {/* 2 */}
          <OrderCard
            imageUrl={pickUpPng}
            title="Ramen"
            campusName="Binus Alam Sutera"
          />

          {/* 3 */}
          <OrderCard
            imageUrl={deliveryPng}
            title="Shoes"
            campusName="Binus Alam Sutera"
          />

          <OrderCard
            imageUrl={pickUpPng}
            title="Shoes"
            campusName="Binus Alam Sutera"
          />

          {/* 2 */}
          <OrderCard
            imageUrl={deliveryPng}
            title="Shoes"
            campusName="Binus Alam Sutera"
          />

          {/* 3 */}
          <OrderCard
            imageUrl={pickUpPng}
            title="Shoes"
            campusName="Binus Alam Sutera"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default HistoryPage;