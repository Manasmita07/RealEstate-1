function Notification() {
  return (
    <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-2 me-xl-1">
      <div
        class="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <i class="mdi mdi-bell-outline mdi-24px"></i>
        <span class="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
      </div>
      <ul class="dropdown-menu dropdown-menu-end py-0">
        <li class="dropdown-menu-header border-bottom">
          <div class="dropdown-header d-flex align-items-center py-3">
            <h6 class="mb-0 me-auto">Notification</h6>
            <span class="badge rounded-pill bg-label-primary">8 New</span>
          </div>
        </li>
        <li class="dropdown-notifications-list scrollable-container ps">
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <img
                      src="assets/img/avatars/1.png"
                      alt=""
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">Congratulation Lettie 🎉</h6>
                  <small class="text-truncate text-body">
                    Won the monthly best seller gold badge
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">1h ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <span class="avatar-initial rounded-circle bg-label-danger">
                      CF
                    </span>
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">Charles Franklin</h6>
                  <small class="text-truncate text-body">
                    Accepted your connection
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">12hr ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <img
                      src="assets/img/avatars/2.png"
                      alt=""
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">New Message ✉️</h6>
                  <small class="text-truncate text-body">
                    You have new message from Natalie
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">1h ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <span class="avatar-initial rounded-circle bg-label-success">
                      <i class="mdi mdi-cart-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">
                    Whoo! You have new order 🛒
                  </h6>
                  <small class="text-truncate text-body">
                    ACME Inc. made new order $1,154
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">1 day ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <img
                      src="assets/img/avatars/9.png"
                      alt=""
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">
                    Application has been approved 🚀
                  </h6>
                  <small class="text-truncate text-body">
                    Your ABC project application has been approved.
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">2 days ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <span class="avatar-initial rounded-circle bg-label-success">
                      <i class="mdi mdi-chart-pie-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">
                    Monthly report is generated
                  </h6>
                  <small class="text-truncate text-body">
                    July monthly financial report is generated{" "}
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">3 days ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <img
                      src="assets/img/avatars/5.png"
                      alt=""
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">Send connection request</h6>
                  <small class="text-truncate text-body">
                    Peter sent you connection request
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">4 days ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <img
                      src="assets/img/avatars/6.png"
                      alt=""
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1 text-truncate">New message from Jane</h6>
                  <small class="text-truncate text-body">
                    Your have new message from Jane
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">5 days ago</small>
                </div>
              </div>
            </li>
            <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
              <div class="d-flex gap-2">
                <div class="flex-shrink-0">
                  <div class="avatar me-1">
                    <span class="avatar-initial rounded-circle bg-label-warning">
                      <i class="mdi mdi-alert-circle-outline"></i>
                    </span>
                  </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 overflow-hidden w-px-200">
                  <h6 class="mb-1">CPU is running high</h6>
                  <small class="text-truncate text-body">
                    CPU Utilization Percent is currently at 88.63%,
                  </small>
                </div>
                <div class="flex-shrink-0 dropdown-notifications-actions">
                  <small class="text-muted">5 days ago</small>
                </div>
              </div>
            </li>
          </ul>
          <div class="ps__rail-x">
            <div
              class="ps__thumb-x"
              tabindex="0"
              // style="left: 0px; width: 0px;"
            ></div>
          </div>
          <div class="ps__rail-y">
            <div
              class="ps__thumb-y"
              tabindex="0"
              // style="top: 0px; height: 0px;"
            ></div>
          </div>
        </li>
        <li class="dropdown-menu-footer border-top p-2">
          <a
            href="javascript:void(0);"
            class="btn btn-primary d-flex justify-content-center waves-effect waves-light"
          >
            View all notifications
          </a>
        </li>
      </ul>
    </li>
  );
}

export default Notification;
