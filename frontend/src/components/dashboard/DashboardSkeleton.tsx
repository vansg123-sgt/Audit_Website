export default function DashboardSkeleton() {

  return (

    <div className="space-y-8 animate-pulse">


      {/* Header Skeleton */}

      <div className="space-y-3">

        <div
          className="
            h-8
            w-64
            rounded-lg
            bg-white/10
          "
        />


        <div
          className="
            h-4
            w-96
            rounded-lg
            bg-white/10
          "
        />


      </div>



      {/* Stats Skeleton */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {
          Array.from({
            length:4
          }).map((_,index)=>(

            <div

              key={index}

              className="
                h-32
                rounded-2xl
                bg-white/10
              "

            />

          ))
        }


      </div>



      {/* Chart Skeleton */}

      <div
        className="
          h-[350px]
          rounded-2xl
          bg-white/10
        "
      />



      {/* Bottom Section */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          lg:grid-cols-3
        "
      >


        <div
          className="
            h-72
            rounded-2xl
            bg-white/10
            lg:col-span-2
          "
        />


        <div
          className="
            h-72
            rounded-2xl
            bg-white/10
          "
        />


      </div>


    </div>

  );

}